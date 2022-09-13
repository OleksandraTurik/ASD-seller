import { useState, useEffect } from 'react';
import advertServices from 'services/advertServices';

const useFetchAdvertsQueryParams = (queryParams) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setPending(true);
        const adverts = await advertServices.getAdvertListWithQueries(queryParams, controller.signal);
        setData(adverts.data);
        setPending(false);
        setError(null);
      } catch (err) {
        setError(err);
        setPending(false);
        setData(null);
      }
    })();

    return () => controller.abort();
  }, [queryParams]);

  return { data, pending, error };
};

export default useFetchAdvertsQueryParams;
