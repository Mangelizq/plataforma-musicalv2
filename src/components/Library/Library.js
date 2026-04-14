import React from 'react';
import Song from '../Song/Song';
import './Library.css';

function Library({ canciones, onRemove }) {
  return (
    <section className="library">
      <div className="library__header">
        <div className="library__title-row">
          <span className="library__icon">🎵</span>
          <div>
            <h2 className="library__title">Mi Biblioteca</h2>
            <p className="library__subtitle">
              {canciones.length === 0
                ? 'Aún no tienes canciones guardadas'
                : `${canciones.length} canción${canciones.length !== 1 ? 'es' : ''} en tu biblioteca`}
            </p>
          </div>
        </div>
      </div>

      {canciones.length === 0 ? (
        <div className="library__empty">
          <span className="library__empty-icon">🎧</span>
          <p className="library__empty-text">
            Agrega canciones desde los resultados de búsqueda para verlas aquí.
          </p>
        </div>
      ) : (
        <>
          <div className="library__list-header">
            <span className="col-num">#</span>
            <span>Título</span>
            <span>Álbum</span>
            <span>Género</span>
            <span className="col-right">⏱</span>
            <span></span>
          </div>

          <div className="library__list">
            {canciones.map((cancion, index) => (
              <Song
                key={cancion.id}
                numero={index + 1}
                titulo={cancion.titulo}
                artista={cancion.artista}
                album={cancion.album}
                duracion={cancion.duracion}
                genero={cancion.genero}
                onRemove={() => onRemove(cancion.id)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default Library;