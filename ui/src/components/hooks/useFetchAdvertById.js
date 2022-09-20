import { useState, useEffect } from 'react';
import advertServices from 'services/advertServices';

const useFetchAdvertById = (id) => {
  const [dataAdvert, setDataAdvert] = useState({});
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setPending(true);
        const advert = await advertServices.getAdvert(id);
        setDataAdvert(advert.data);
        setPending(false);
        setError(null);
      } catch (err) {
        if (err.code !== 'ERR_CANCELED') {
          setError(err);
          setPending(false);
          setDataAdvert({});
        }
      }
    })();
  }, [id]);

  return { dataAdvert, pending, error };
};

export default useFetchAdvertById;
