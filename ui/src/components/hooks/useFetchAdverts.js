import { useCallback, useEffect, useState } from 'react';
import advertServices from 'services/advertServices';

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
        setPage(prevState => prevState + 1);
        if (!adverts.data.next) {
          setMore(false);
        }
      } catch (e) {
        setError(e.error);
      }
    },
    [],
  );

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
    getData();
    return () => {};
  }, []);

  const fetchData = async () => {
    if (list.length < 10) {
      return;
    }
    const adverts = await advertServices.getAdvertsList(id, page);
    if (!adverts.data.next) {
      setMore(false);
    }
    setList((prevState) => [...prevState, ...adverts.data.results]);
  };
  return {
    list,
    loading,
    error,
    fetchData,
    hasMore,
  };
};
