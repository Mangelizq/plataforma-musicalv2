import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import theme from './styles/theme';

const album = {
  idAlbum: '2113118',
  strAlbum: 'Heathen Chemistry',
  strArtist: 'Oasis',
  intYearReleased: '2002',
  strGenre: 'Rock',
  strAlbumThumb: 'https://example.com/heathen-chemistry.jpg',
  strDescriptionES: 'Descripción del álbum.',
};

function renderApp(initialEntries = ['/']) {
  return render(
    <MemoryRouter
      initialEntries={initialEntries}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MemoryRouter>
  );
}

afterEach(() => {
  jest.restoreAllMocks();
});

test('muestra la búsqueda y la biblioteca en la página principal', () => {
  renderApp();

  expect(screen.getByLabelText(/buscar álbumes por artista/i)).toHaveAttribute(
    'id',
    'artist-search'
  );
  expect(screen.getByText('Music for everyone')).toHaveAttribute('lang', 'en');
  expect(screen.getByText(/busca un artista para ver sus álbumes/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /mi biblioteca/i })).toBeInTheDocument();
});

test('busca álbumes y crea el enlace hacia sus detalles', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => ({ album: [album] }),
  });
  renderApp();

  fireEvent.change(screen.getByPlaceholderText(/buscar artista/i), {
    target: { value: '  Oasis  ' },
  });
  fireEvent.click(screen.getByRole('button', { name: /^buscar$/i }));

  expect(await screen.findByText('Heathen Chemistry')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /ver detalles/i })).toHaveAttribute(
    'href',
    '/song/2113118'
  );
  expect(global.fetch.mock.calls[0][0]).toContain('searchalbum.php?s=Oasis');
});

test('muestra el estado de carga mientras espera la API', () => {
  jest.spyOn(global, 'fetch').mockImplementation(() => new Promise(() => {}));
  renderApp();

  fireEvent.change(screen.getByPlaceholderText(/buscar artista/i), {
    target: { value: 'Oasis' },
  });
  fireEvent.click(screen.getByRole('button', { name: /^buscar$/i }));

  expect(screen.getByRole('status')).toHaveTextContent('Cargando...');
});

test('muestra al menos tres portadas con texto alternativo descriptivo', async () => {
  const albums = [
    album,
    { ...album, idAlbum: '2', strAlbum: 'Definitely Maybe' },
    { ...album, idAlbum: '3', strAlbum: 'Be Here Now' },
  ];
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => ({ album: albums }),
  });
  renderApp();

  fireEvent.change(screen.getByLabelText(/buscar álbumes por artista/i), {
    target: { value: 'Oasis' },
  });
  fireEvent.click(screen.getByRole('button', { name: /^buscar$/i }));

  const covers = await screen.findAllByRole('img', {
    name: /portada del álbum .+ de oasis/i,
  });
  expect(covers).toHaveLength(3);
});

test('muestra el detalle obtenido con el parámetro de la ruta', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: async () => ({ album: [album] }),
  });
  renderApp(['/song/2113118']);

  expect(await screen.findByRole('heading', { name: 'Heathen Chemistry' })).toBeInTheDocument();
  expect(screen.getByText('Descripción del álbum.')).toBeInTheDocument();
  expect(global.fetch.mock.calls[0][0]).toContain('album.php?m=2113118');
});

test('permite reintentar después de un error', async () => {
  jest
    .spyOn(global, 'fetch')
    .mockRejectedValueOnce(new Error('Sin conexión'))
    .mockResolvedValueOnce({
      ok: true,
      json: async () => ({ album: [album] }),
    });
  renderApp();

  fireEvent.change(screen.getByPlaceholderText(/buscar artista/i), {
    target: { value: 'Oasis' },
  });
  fireEvent.click(screen.getByRole('button', { name: /^buscar$/i }));

  fireEvent.click(await screen.findByRole('button', { name: /reintentar/i }));
  expect(await screen.findByText('Heathen Chemistry')).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(2);
});
