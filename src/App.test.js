import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('muestra la búsqueda y la biblioteca en la página principal', () => {
  render(
    <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByPlaceholderText(/buscar artista/i)).toBeInTheDocument();
  expect(screen.getByText(/busca un artista para ver sus álbumes/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /mi biblioteca/i })).toBeInTheDocument();
});
