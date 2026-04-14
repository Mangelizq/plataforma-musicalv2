import React from 'react';
import Song from '../Song/Song';
import './SearchResults.css';

function SearchResults({ canciones, biblioteca, onAdd }) {
  return (
    <section className="search-results">
      <div className="search-results__header">
        <div className="search-results__title-row">
          <span className="search-results__icon">🔍</span>
          <div>
            <h2 className="search-results__title">Resultados de búsqueda</h2>
            <p className="search-results__subtitle">
              {canciones.length} canciones encontradas
            </p>
          </div>
        </div>
      </div>

      <div className="search-results__list-header">
        <span className="col-num">#</span>
        <span>Título</span>
        <span>Álbum</span>
        <span>Género</span>
        <span className="col-right">⏱</span>
        <span></span>
      </div>

      <div className="search-results__list">
        {canciones.map((cancion) => (
          <Song
            key={cancion.id}
            numero={cancion.id}
            titulo={cancion.titulo}
            artista={cancion.artista}
            album={cancion.album}
            duracion={cancion.duracion}
            genero={cancion.genero}
            onAdd={onAdd}
            isInLibrary={biblioteca.some((s) => s.id === cancion.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default SearchResults;