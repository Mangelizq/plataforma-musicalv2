import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResults.css';

function SearchResults({ albums, biblioteca, onAdd }) {
  return (
    <section className="search-results">
      <div className="search-results__header">
        <div className="search-results__title-row">
          <span className="search-results__icon">🔍</span>
          <div>
            <h2 className="search-results__title">Resultados de búsqueda</h2>
            <p className="search-results__subtitle">
              {albums.length} álbum{albums.length !== 1 ? 'es' : ''} encontrado{albums.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </div>
      <div className="search-results__grid">
        {albums.map((album) => {
          const isInLibrary = biblioteca.some((item) => item.id === album.idAlbum);
          return (
            <article className="album-card" key={album.idAlbum}>
              {album.strAlbumThumb ? (
                <img className="album-card__cover" src={album.strAlbumThumb} alt={`Portada de ${album.strAlbum}`} loading="lazy" />
              ) : (
                <div className="album-card__placeholder" aria-hidden="true">♪</div>
              )}
              <div className="album-card__body">
                <span className="album-card__type">Álbum</span>
                <h3 className="album-card__title">{album.strAlbum}</h3>
                <p className="album-card__artist">{album.strArtist}</p>
                <p className="album-card__year">{album.intYearReleased || 'Año no disponible'}</p>
                <div className="album-card__actions">
                  <Link className="album-card__link" to={`/song/${album.idAlbum}`}>Ver detalles</Link>
                  <button
                    className={`album-card__add ${isInLibrary ? 'album-card__add--saved' : ''}`}
                    type="button"
                    onClick={() => onAdd(album)}
                    disabled={isInLibrary}
                  >
                    {isInLibrary ? '✓ Guardado' : '+ Biblioteca'}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default SearchResults;
