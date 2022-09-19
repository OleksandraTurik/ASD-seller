import { useState, useEffect } from 'react';
import advertServices from 'services/advertServices';

const useFetchAdverts = (queryParams = {}) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setPending(true);
        setData(null);
        const adverts = await advertServices.getAdvertList(queryParams, controller.signal);
        setData(adverts.data);
        setPending(false);
        setError(null);
      } catch (err) {
        if (err.code !== 'ERR_CANCELED') {
          setError(err);
          setPending(false);
          setData(null);
        }
      }
    })();

    return () => controller.abort();
  }, [queryParams]);

  return { data, pending, error };
};

export default useFetchAdverts;
