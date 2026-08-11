import React, { useState } from 'react';
import {
  Controls,
  SearchButton,
  SearchForm,
  SearchInput,
  SearchLabel,
} from './SearchBar.styles';

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const artist = inputValue.trim();
    if (artist) onSearch(artist);
  };

  return (
    <SearchForm onSubmit={handleSubmit} role="search">
      <SearchLabel htmlFor="artist-search">
        Buscar álbumes por artista
      </SearchLabel>
      <Controls>
        <SearchInput
          id="artist-search"
          type="search"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Buscar artista..."
          autoComplete="off"
        />
        <SearchButton type="submit">Buscar</SearchButton>
      </Controls>
    </SearchForm>
  );
}

export default SearchBar;
