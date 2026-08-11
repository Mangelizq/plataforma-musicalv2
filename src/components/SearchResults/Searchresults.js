import React from 'react';
import {
  AlbumCard,
  AlbumCover,
  AlbumTitle,
  AlbumType,
  AlbumYear,
  ArtistName,
  CardActions,
  CardBody,
  CoverPlaceholder,
  DetailsLink,
  Icon,
  ResultsContainer,
  ResultsGrid,
  ResultsHeader,
  ResultsSubtitle,
  ResultsTitle,
  SaveButton,
  TitleRow,
} from './SearchResults.styles';

function SearchResults({ albums, biblioteca, onAdd }) {
  return (
    <ResultsContainer>
      <ResultsHeader>
        <TitleRow>
          <Icon>🔍</Icon>
          <div>
            <ResultsTitle>Resultados de búsqueda</ResultsTitle>
            <ResultsSubtitle>
              {albums.length} álbum{albums.length !== 1 ? 'es' : ''} encontrado{albums.length !== 1 ? 's' : ''}
            </ResultsSubtitle>
          </div>
        </TitleRow>
      </ResultsHeader>
      <ResultsGrid>
        {albums.map((album) => {
          const isInLibrary = biblioteca.some((item) => item.id === album.idAlbum);
          return (
            <AlbumCard $saved={isInLibrary} key={album.idAlbum}>
              {album.strAlbumThumb ? (
                <AlbumCover src={album.strAlbumThumb} alt={`Portada de ${album.strAlbum}`} loading="lazy" />
              ) : (
                <CoverPlaceholder aria-hidden="true">♪</CoverPlaceholder>
              )}
              <CardBody>
                <AlbumType>Álbum</AlbumType>
                <AlbumTitle>{album.strAlbum}</AlbumTitle>
                <ArtistName>{album.strArtist}</ArtistName>
                <AlbumYear>{album.intYearReleased || 'Año no disponible'}</AlbumYear>
                <CardActions>
                  <DetailsLink to={`/song/${album.idAlbum}`}>Ver detalles</DetailsLink>
                  <SaveButton
                    $saved={isInLibrary}
                    type="button"
                    onClick={() => onAdd(album)}
                    disabled={isInLibrary}
                  >
                    {isInLibrary ? '✓ Guardado' : '+ Biblioteca'}
                  </SaveButton>
                </CardActions>
              </CardBody>
            </AlbumCard>
          );
        })}
      </ResultsGrid>
    </ResultsContainer>
  );
}

export default SearchResults;
