import React from "react";
import {
  ActionButton,
  Actions,
  SongAlbum,
  SongArtist,
  SongDuration,
  SongGenre,
  SongInfo,
  SongNumber,
  SongRow,
  SongTitle,
} from "./Song.styles";

function Song({
  numero,
  titulo,
  artista,
  album,
  duracion,
  genero,
  onAdd,
  onRemove,
  isInLibrary,
}) {
  return (
    <SongRow $inLibrary={isInLibrary}>
      <SongNumber>{numero}</SongNumber>

      <SongInfo>
        <SongTitle>{titulo}</SongTitle>
        <SongArtist>{artista}</SongArtist>
      </SongInfo>

      <SongAlbum>{album}</SongAlbum>

      <SongGenre>{genero}</SongGenre>

      <SongDuration>{duracion}</SongDuration>

      <Actions>
        {onAdd && (
          <ActionButton
            $saved={isInLibrary}
            onClick={() =>
              onAdd({ numero, titulo, artista, album, duracion, genero })
            }
            disabled={isInLibrary}
            title={
              isInLibrary
                ? "Ya está en tu biblioteca"
                : "Agregar a mi biblioteca"
            }
          >
            {isInLibrary ? "✓ Agregada" : "+ Agregar a mi biblioteca"}
          </ActionButton>
        )}
        {onRemove && (
          <ActionButton
            $variant="remove"
            onClick={() => onRemove(numero)}
            title="Quitar de la biblioteca"
          >
            ✕ Quitar
          </ActionButton>
        )}
      </Actions>
    </SongRow>
  );
}

export default Song;
