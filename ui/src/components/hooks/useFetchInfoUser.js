import { useState, useEffect } from 'react';
import advertServices from 'services/userServices';

const useFetchInfoUser = (id) => {
  const [dataUser, setDataUser] = useState({});
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setPending(true);
        const user = await advertServices.fetchInfoExactUser(id);
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
  }, [id]);

  return { dataUser, pending, error };
};

export default useFetchInfoUser;
