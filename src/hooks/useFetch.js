import { useCallback, useEffect, useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [requestNumber, setRequestNumber] = useState(0);

  const refetch = useCallback(() => {
    if (url) setRequestNumber((number) => number + 1);
  }, [url]);

  useEffect(() => {
    if (!url) {
      setData(null);
      setLoading(false);
      setError(null);
      return undefined;
    }

    const controller = new AbortController();

    async function loadData() {
      setData(null);
      setError(null);
      setLoading(true);

      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error(`Error HTTP ${response.status}`);

        const json = await response.json();
        if (!json || typeof json !== 'object') {
          throw new Error('La API devolvió una respuesta inválida.');
        }
        setData(json);
      } catch (requestError) {
        if (requestError.name !== 'AbortError') setError(requestError);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadData();
    return () => controller.abort();
  }, [url, requestNumber]);

  return { data, loading, error, refetch };
}

export default useFetch;
