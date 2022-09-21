import { useState, useEffect } from 'react';
import userServices from 'services/userServices';

const useGetAdvertsListUser = (id) => {
  const [dataAdvertsList, setDataAdvertsList] = useState([]);
  const [pendingAdvertsList, setPendingAdvertsList] = useState(false);
  const [errorAdvertsList, setErrorAdvertsList] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    if (id) {
      (async () => {
        try {
          setPendingAdvertsList(true);
          const advertsList = await userServices.getAdvertsListUser(id, controller.signal);
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
    }
    return () => controller.abort();
  }, [id]);

  return { dataAdvertsList, pendingAdvertsList, errorAdvertsList };
};

export default useGetAdvertsListUser;
