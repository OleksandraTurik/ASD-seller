import { useState, useEffect } from 'react';
import advertServices from 'services/userServices';

const useFetchInfoUser = (id) => {
  const [dataUser, setDataUser] = useState({});
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    if (id) {
      (async () => {
        try {
          setPending(true);
          const user = await advertServices.fetchInfoExactUser(id, controller.signal);
          setDataUser(user.data);
          setPending(false);
          setError(null);
        } catch (err) {
          if (err.code !== 'ERR_CANCELED') {
            setError(err);
            setPending(false);
            setDataUser({});
          }
        }
      })();
    }
    return () => controller.abort();
  }, [id]);

  return { dataUser, pending, error };
};

export default useFetchInfoUser;
