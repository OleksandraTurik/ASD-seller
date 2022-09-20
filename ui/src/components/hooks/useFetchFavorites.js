import { useEffect, useState } from 'react';
import advertServices from 'services/advertServices';

const useFetchFavorites = (arrayOfId) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        const results = await Promise.all(arrayOfId.map((id) => advertServices.getAdvertById(id, controller.signal)));
        setData(results.map(el => el.data));
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    })();
    return () => controller.abort();
  }, [arrayOfId]);

  return { data, loading, error };
};

export default useFetchFavorites;
