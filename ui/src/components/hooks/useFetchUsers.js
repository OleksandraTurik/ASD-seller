import { useState, useEffect } from 'react';
import userServices from 'services/userServices';

const useFetchUsers = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setPending(true);
        const result = await userServices.fetchUsers();
        setDataUsers(result.data.results);
        setPending(false);
        setError(null);
      } catch (err) {
        if (err.code !== 'ERR_CANCELED') {
          setError(err);
          setPending(false);
          setDataUsers([]);
        }
      }
    })();
  }, []);

  return { dataUsers, pending, error };
};

export default useFetchUsers;
