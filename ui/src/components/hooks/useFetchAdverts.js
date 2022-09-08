import { useCallback, useEffect, useState } from 'react';
import advertServices from '../../services/advertServices';

export const useFetchAdverts = (id) => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setMore] = useState(true);

  const getData = useCallback(
    async () => {
      try {
        const adverts = await advertServices.getAdvertsList(id, page);
        setList(adverts.data.results);
        setLoading(false);
      } catch (e) {
        setError(e.error);
      }
    },
    [],
  );

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {});
  const fetchData = async () => {
    setPage(prevState => prevState + 1);
    const adverts = await advertServices.getAdvertsList(id, page);
    setList((prevState) => [...prevState, ...adverts.data.results]);
    if (!adverts.data.next) {
      setMore(false);
    }
  };
  return {
    list,
    loading,
    error,
    fetchData,
    hasMore,
  };
};
