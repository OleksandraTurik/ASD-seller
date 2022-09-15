import { useEffect, useState } from 'react';
import advertServices from '../../services/advertServices';

export const useFetchAdverts = (id) => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const [itemsAmount, setItemsAmount] = useState(0);

  const [filters, setFilters] = useState({
    sort: 'ascTitle',
    category: '',
    search: '',
    page: 1,
  });

  const changeFilters = (name, value) => {
    setFilters(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const getData = async () => {
    setLoading(true);
    setError(false);
    try {
      const adverts = await advertServices.getAdvertsList(id, filters);
      setList(adverts.data.results);
      setItemsAmount(adverts.data.itemsAmount);
    } catch (e) {
      setError(e.message);
    }
  };
  useEffect(() => {
    getData();
  }, [filters]);

  return {
    loading, list, changeFilters, itemsAmount, setFilters, filters, error,
  };
};
