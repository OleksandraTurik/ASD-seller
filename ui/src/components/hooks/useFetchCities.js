/* eslint-disable camelcase */
/* eslint-disable prefer-template */
import { useCallback, useEffect, useState } from 'react';
import citiesServices from '../../services/citiesServices';

export const useFetchCities = () => {
  const [cities, setCities] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getCities = useCallback(async () => {
    try {
      const city = await citiesServices.getCities();
      const citiesOptions = city.data.results.map(({ _id, city, admin_name }) => (
        {
          label: city + ', ' + admin_name,
          value: _id,
        }
      ));
      setCities(citiesOptions);
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getCities();
  }, []);

  return {
    cities,
    loading,
    error,
  };
};
