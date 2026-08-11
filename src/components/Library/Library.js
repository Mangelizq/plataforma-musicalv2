import React from 'react';
import Song from '../Song/Song';
import {
  Empty,
  EmptyIcon,
  EmptyText,
  HeaderCell,
  Icon,
  LibraryContainer,
  LibraryHeader,
  List,
  ListHeader,
  Subtitle,
  Title,
  TitleRow,
} from './Library.styles';

function Library({ canciones, onRemove }) {
  return (
    <LibraryContainer>
      <LibraryHeader>
        <TitleRow>
          <Icon>🎵</Icon>
          <div>
            <Title>Mi Biblioteca</Title>
            <Subtitle>
              {canciones.length === 0
                ? 'Aún no tienes canciones guardadas'
                : `${canciones.length} canción${canciones.length !== 1 ? 'es' : ''} en tu biblioteca`}
            </Subtitle>
          </div>
        </TitleRow>
      </LibraryHeader>

      {canciones.length === 0 ? (
        <Empty>
          <EmptyIcon>🎧</EmptyIcon>
          <EmptyText>
            Agrega canciones desde los resultados de búsqueda para verlas aquí.
          </EmptyText>
        </Empty>
      ) : (
        <>
          <ListHeader>
            <HeaderCell $align="center">#</HeaderCell>
            <HeaderCell>Título</HeaderCell>
            <HeaderCell $hideTablet>Álbum</HeaderCell>
            <HeaderCell $hideTablet>Género</HeaderCell>
            <HeaderCell $align="right" $hideTablet>⏱</HeaderCell>
            <HeaderCell aria-hidden="true" />
          </ListHeader>

          <List>
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
          </List>
        </>
      )}
    </LibraryContainer>
  );
}

export default Library;
