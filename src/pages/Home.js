import React, { useMemo, useState } from 'react';
import Library from '../components/Library/Library';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/Searchresults';
import useFetch from '../hooks/useFetch';
import { Main, RetryButton, StatusMessage } from './Home.styles';

const API_BASE = 'https://www.theaudiodb.com/api/v1/json/2';

function Home({ biblioteca, onAdd, onRemove }) {
  const [searchTerm, setSearchTerm] = useState('');
  const url = searchTerm
    ? `${API_BASE}/searchalbum.php?s=${encodeURIComponent(searchTerm)}`
    : null;
  const { data, loading, error, refetch } = useFetch(url);
  const albums = useMemo(
    () => (Array.isArray(data?.album) ? data.album : []),
    [data]
  );

  return (
    <Main>
      <SearchBar onSearch={setSearchTerm} />
      {!searchTerm && <StatusMessage $type="empty">Busca un artista para ver sus álbumes.</StatusMessage>}
      {searchTerm && loading && <StatusMessage $type="loading">Cargando...</StatusMessage>}
      {searchTerm && !loading && error && (
        <StatusMessage $type="error" role="alert">
          <p>Hubo un problema al cargar los datos. Intenta nuevamente.</p>
          <RetryButton $variant="danger" type="button" onClick={refetch}>Reintentar</RetryButton>
        </StatusMessage>
      )}
      {searchTerm && !loading && !error && data && albums.length === 0 && (
        <StatusMessage $type="empty">No se encontraron resultados.</StatusMessage>
      )}
      {!loading && !error && albums.length > 0 && (
        <SearchResults albums={albums} biblioteca={biblioteca} onAdd={onAdd} />
      )}
      <Library canciones={biblioteca} onRemove={onRemove} />
    </Main>
  );
}

export default Home;
