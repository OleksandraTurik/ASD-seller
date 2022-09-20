/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
import advertServices from 'services/advertServices';

const useFetchExactAdvert = (arrayOfId) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [zeroFavorites, setZeroFavorites] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const results = await Promise.all(arrayOfId.map((id) => advertServices.getAdvertById(id)));
        setData(results.map(el => el.data));
        setLoading(false);
        await results.length === 0 && setZeroFavorites(true);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    })();
  }, [arrayOfId]);

  return {
    data,
    loading,
    error,
    zeroFavorites,
  };
};

export default useFetchExactAdvert;
