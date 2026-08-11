import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './SongDetail.css';

const API_BASE = 'https://www.theaudiodb.com/api/v1/json/2';

function SongDetail() {
  const { id } = useParams();
  // La ruta conserva /song/:id por la actividad, pero el ID es de un álbum.
  const url = id ? `${API_BASE}/album.php?m=${encodeURIComponent(id)}` : null;
  const { data, loading, error, refetch } = useFetch(url);
  const album = Array.isArray(data?.album) ? data.album[0] : null;
  const description = album?.strDescriptionES || album?.strDescriptionEN;

  return (
    <main className="app__main detail-page">
      <Link className="detail-page__back" to="/">← Volver a la búsqueda</Link>
      {loading && <div className="status">Cargando...</div>}
      {!loading && error && (
        <div className="status status--error" role="alert">
          <p>Hubo un problema al cargar los datos. Intenta nuevamente.</p>
          <button className="status__button" type="button" onClick={refetch}>Reintentar</button>
        </div>
      )}
      {!loading && !error && data && !album && (
        <div className="status">No se encontró información para este álbum.</div>
      )}
      {!loading && !error && album && (
        <article className="album-detail">
          <div className="album-detail__cover-wrap">
            {album.strAlbumThumb ? (
              <img
                className="album-detail__cover"
                src={album.strAlbumThumbHQ || album.strAlbumThumb}
                alt={`Portada de ${album.strAlbum}`}
              />
            ) : (
              <div className="album-detail__placeholder" aria-hidden="true">♪</div>
            )}
          </div>
          <div className="album-detail__content">
            <span className="album-detail__eyebrow">Detalle del álbum</span>
            <h2>{album.strAlbum}</h2>
            <p className="album-detail__artist">{album.strArtist}</p>
            <dl className="album-detail__facts">
              <div><dt>Título</dt><dd>{album.strAlbum}</dd></div>
              <div><dt>Artista</dt><dd>{album.strArtist}</dd></div>
              <div><dt>Álbum</dt><dd>{album.strAlbum}</dd></div>
              <div><dt>Año</dt><dd>{album.intYearReleased || 'No disponible'}</dd></div>
              <div><dt>Género</dt><dd>{album.strGenre || album.strStyle || 'No disponible'}</dd></div>
            </dl>
            {description && <p className="album-detail__description">{description}</p>}
          </div>
        </article>
      )}
    </main>
  );
}

export default SongDetail;
