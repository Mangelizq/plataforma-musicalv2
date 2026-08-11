import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import {
  AlbumTitle,
  ArtistName,
  BackLink,
  CoverImage,
  CoverPlaceholder,
  CoverWrap,
  Description,
  DetailCard,
  DetailContent,
  DetailPage,
  DetailRetryButton,
  DetailStatus,
  Eyebrow,
  Fact,
  Facts,
} from './SongDetail.styles';

const API_BASE = 'https://www.theaudiodb.com/api/v1/json/2';

function SongDetail() {
  const { id } = useParams();
  // La ruta conserva /song/:id por la actividad, pero el ID es de un álbum.
  const url = id ? `${API_BASE}/album.php?m=${encodeURIComponent(id)}` : null;
  const { data, loading, error, refetch } = useFetch(url);
  const album = Array.isArray(data?.album) ? data.album[0] : null;
  const description = album?.strDescriptionES || album?.strDescriptionEN;

  return (
    <DetailPage>
      <BackLink to="/" aria-label="Volver a la página principal">
        ← Volver a la búsqueda
      </BackLink>
      {loading && (
        <DetailStatus $type="loading" role="status" aria-live="polite">
          Cargando...
        </DetailStatus>
      )}
      {!loading && error && (
        <DetailStatus $type="error" role="alert">
          <p>Hubo un problema al cargar los datos. Intenta nuevamente.</p>
          <DetailRetryButton
            $variant="danger"
            type="button"
            onClick={refetch}
            aria-label="Reintentar carga del álbum"
          >
            Reintentar
          </DetailRetryButton>
        </DetailStatus>
      )}
      {!loading && !error && data && !album && (
        <DetailStatus $type="empty">No se encontró información para este álbum.</DetailStatus>
      )}
      {!loading && !error && album && (
        <DetailCard>
          <CoverWrap>
            {album.strAlbumThumb ? (
              <CoverImage
                src={album.strAlbumThumbHQ || album.strAlbumThumb}
                alt={`Portada del álbum ${album.strAlbum} de ${album.strArtist}`}
              />
            ) : (
              <CoverPlaceholder aria-hidden="true">♪</CoverPlaceholder>
            )}
          </CoverWrap>
          <DetailContent>
            <Eyebrow>Detalle del álbum</Eyebrow>
            <AlbumTitle>{album.strAlbum}</AlbumTitle>
            <ArtistName>{album.strArtist}</ArtistName>
            <Facts>
              <Fact><dt>Título</dt><dd>{album.strAlbum}</dd></Fact>
              <Fact><dt>Artista</dt><dd>{album.strArtist}</dd></Fact>
              <Fact><dt>Álbum</dt><dd>{album.strAlbum}</dd></Fact>
              <Fact><dt>Año</dt><dd>{album.intYearReleased || 'No disponible'}</dd></Fact>
              <Fact><dt>Género</dt><dd>{album.strGenre || album.strStyle || 'No disponible'}</dd></Fact>
            </Facts>
            {description && <Description>{description}</Description>}
          </DetailContent>
        </DetailCard>
      )}
    </DetailPage>
  );
}

export default SongDetail;
