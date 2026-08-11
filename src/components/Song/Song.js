import React from "react";
import "./Song.css";

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
    <div className={`song ${isInLibrary ? "song--in-library" : ""}`}>
      <span className="song__number">{numero}</span>

      <div className="song__info">
        <span className="song__title">{titulo}</span>
        <span className="song__artist">{artista}</span>
      </div>

      <span className="song__album">{album}</span>

      <span className="song__genre">{genero}</span>

      <span className="song__duration">{duracion}</span>

      <div className="song__actions">
        {onAdd && (
          <button
            className={`song__btn song__btn--add ${isInLibrary ? "song__btn--added" : ""}`}
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
          </button>
        )}
        {onRemove && (
          <button
            className="song__btn song__btn--remove"
            onClick={() => onRemove(numero)}
            title="Quitar de la biblioteca"
          >
            ✕ Quitar
          </button>
        )}
      </div>
    </div>
  );
}

export default Song;
