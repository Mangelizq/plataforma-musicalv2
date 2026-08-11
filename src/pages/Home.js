import React, { useMemo, useState } from 'react';
import Library from '../components/Library/Library';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/Searchresults';
import useFetch from '../hooks/useFetch';

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
    <main className="app__main">
      <SearchBar onSearch={setSearchTerm} />
      {!searchTerm && <div className="status">Busca un artista para ver sus álbumes.</div>}
      {searchTerm && loading && <div className="status">Cargando...</div>}
      {searchTerm && !loading && error && (
        <div className="status status--error" role="alert">
          <p>Hubo un problema al cargar los datos. Intenta nuevamente.</p>
          <button className="status__button" type="button" onClick={refetch}>Reintentar</button>
        </div>
      )}
      {searchTerm && !loading && !error && data && albums.length === 0 && (
        <div className="status">No se encontraron resultados.</div>
      )}
      {!loading && !error && albums.length > 0 && (
        <SearchResults albums={albums} biblioteca={biblioteca} onAdd={onAdd} />
      )}
      <Library canciones={biblioteca} onRemove={onRemove} />
    </main>
  );
}

export default Home;
