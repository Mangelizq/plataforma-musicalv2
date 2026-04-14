import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import SearchResults from './components/SearchResults/Searchresults';
import Library from './components/Library/Library.js';
import "./App.css";

const CANCIONES_FICTICIAS  = [
  {
    id: 1,
    titulo: "Blinding Lights",
    artista: "The Weeknd",
    album: "After Hours",
    duracion: "3:20",
    genero: "Synth-pop",
  },
  {
    id: 2,
    titulo: "As It Was",
    artista: "Harry Styles",
    album: "Harry's House",
    duracion: "2:37",
    genero: "Pop",
  },
  {
    id: 3,
    titulo: "Flowers",
    artista: "Miley Cyrus",
    album: "Endless Summer Vacation",
    duracion: "3:21",
    genero: "Pop",
  },
  {
    id: 4,
    titulo: "Anti-Hero",
    artista: "Taylor Swift",
    album: "Midnights",
    duracion: "3:20",
    genero: "Indie pop",
  },
  {
    id: 5,
    titulo: "Unholy",
    artista: "Sam Smith ft. Kim Petras",
    album: "Gloria",
    duracion: "2:36",
    genero: "Pop",
  },
  {
    id: 6,
    titulo: "Mis planes son amarte",
    artista: "Juanes",
    album: "Mis planes son amarte",
    duracion: "3:31",
    genero: "Pop latino",
  },
  {
    id: 7,
    titulo: "Somebody's Watching Me",
    artista: "Rockwell ft. Michael Jackson",
    album: "Scream",
    duracion: "3:58",
    genero: "Pop",
  },
  {
    id: 8,
    titulo: "Calm Down",
    artista: "Rema & Selena Gomez",
    album: "Rave & Roses Ultra",
    duracion: "3:59",
    genero: "Afrobeats",
  },
];

function App() {
  const [resultadosBusqueda] = useState(CANCIONES_FICTICIAS);
 
  const [biblioteca, setBiblioteca] = useState([]);
 
  useEffect(() => {
    if (biblioteca.length === 0) {
      console.log('La biblioteca está vacía. ¡Agrega tus canciones favoritas!');
    } else {
      console.log(
        `Biblioteca actualizada — ${biblioteca.length} canción(es): ` +
        biblioteca.map((c) => `"${c.titulo}"`).join(', ')
      );
    }
  }, [biblioteca]);
 
  const handleAgregar = (cancion) => {
    const yaExiste = biblioteca.some((c) => c.id === cancion.numero);
    if (yaExiste) return;
 
    const nuevaCancion = {
      id:       cancion.numero,
      titulo:   cancion.titulo,
      artista:  cancion.artista,
      album:    cancion.album,
      duracion: cancion.duracion,
      genero:   cancion.genero,
    };
 
    setBiblioteca((prev) => [...prev, nuevaCancion]);
  };
 
  const handleQuitar = (id) => {
    setBiblioteca((prev) => prev.filter((c) => c.id !== id));
  };
 
  return (
    <div className="app">
      <Header />
 
      <main className="app__main">
        <SearchResults
          canciones={resultadosBusqueda}
          biblioteca={biblioteca}
          onAdd={handleAgregar}
        />
 
        <Library
          canciones={biblioteca}
          onRemove={handleQuitar}
        />
      </main>
    </div>
  );
}
 
export default App;