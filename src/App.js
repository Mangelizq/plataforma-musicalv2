import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import SongDetail from './pages/SongDetail';
import { AppContainer } from './App.styles';

function App() {
  const [biblioteca, setBiblioteca] = useState([]);

  useEffect(() => {
    if (biblioteca.length === 0) {
      console.log('La biblioteca está vacía. ¡Agrega tus álbumes favoritos!');
    } else {
      console.log(
        `Biblioteca actualizada — ${biblioteca.length} álbum(es): ${biblioteca
          .map((album) => `"${album.titulo}"`)
          .join(', ')}`
      );
    }
  }, [biblioteca]);

  const handleAgregar = (album) => {
    setBiblioteca((actual) => {
      if (actual.some((item) => item.id === album.idAlbum)) {
        return actual;
      }

      return [
        ...actual,
        {
          id: album.idAlbum,
          titulo: album.strAlbum,
          artista: album.strArtist,
          album: album.strAlbum,
          duracion: album.intYearReleased || '—',
          genero: album.strGenre || album.strStyle || 'Sin género',
        },
      ];
    });
  };

  const handleQuitar = (id) => {
    setBiblioteca((actual) => actual.filter((item) => item.id !== id));
  };

  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              biblioteca={biblioteca}
              onAdd={handleAgregar}
              onRemove={handleQuitar}
            />
          }
        />
        <Route path="/song/:id" element={<SongDetail />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
