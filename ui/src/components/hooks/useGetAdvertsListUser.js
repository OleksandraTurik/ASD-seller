import { useState, useEffect } from 'react';
import userServices from 'services/userServices';

const useGetAdvertsListUser = (id) => {
  const [dataAdvertsList, setDataAdvertsList] = useState([]);
  const [pendingAdvertsList, setPendingAdvertsList] = useState(false);
  const [errorAdvertsList, setErrorAdvertsList] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setPendingAdvertsList(true);
        const advertsList = await userServices.getAdvertsListUser(id);
        setDataAdvertsList(advertsList.results);
        setPendingAdvertsList(false);
        setErrorAdvertsList(null);
      } catch (err) {
        if (err.code !== 'ERR_CANCELED') {
          setErrorAdvertsList(err);
          setErrorAdvertsList(false);
          setDataAdvertsList([]);
        }
      }
    })();
  }, [id]);

  return { dataAdvertsList, pendingAdvertsList, errorAdvertsList };
};

export default useGetAdvertsListUser;
