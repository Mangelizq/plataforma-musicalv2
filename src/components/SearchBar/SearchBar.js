import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const artist = inputValue.trim();
    if (artist) onSearch(artist);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit} role="search">
      <label className="search-bar__label" htmlFor="artist-search">
        Buscar álbumes por artista
      </label>
      <div className="search-bar__controls">
        <input
          id="artist-search"
          className="search-bar__input"
          type="search"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Buscar artista..."
          autoComplete="off"
        />
        <button className="search-bar__button" type="submit">Buscar</button>
      </div>
    </form>
  );
}

export default SearchBar;
