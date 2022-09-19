import { useEffect, useState } from 'react';
import advertServices from 'services/advertServices';

const useFetchExactAdvert = (arrayOfId) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const results = await Promise.all(arrayOfId.map((id) => advertServices.getAdvert(id)));
        setData(results.map(el => el.data));
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    })();
  }, [arrayOfId]);

  return { data, loading, error };
};

export default useFetchExactAdvert;
