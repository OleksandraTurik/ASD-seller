import { useState, useEffect } from 'react';
import categoriesServices from 'services/categoriesServices';

const useFetchCategories = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    (async () => {
      try {
        const categories = await categoriesServices.getCategories(controller.signal);
        setData(categories.data);
        setLoading(false);
        setError(null);
      } catch (e) {
        if (e.code !== 'ERR_CANCELED') {
          setError(e);
          setLoading(false);
          setData(null);
        }
      }
    })();
    return () => controller.abort();
  }, []);

  return { data, loading, error };
};

export default useFetchCategories;
