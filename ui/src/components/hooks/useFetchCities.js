/* eslint-disable camelcase */
/* eslint-disable prefer-template */
import { useEffect, useState } from 'react';
import citiesServices from 'services/citiesServices';

export const useFetchCities = () => {
  const [cities, setCities] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    (async () => {
      try {
        const cities = await citiesServices.getCities(controller.signal);
        const citiesOptions = cities.data.results.map((e) => ({ label: `${e.city}, ${e.admin_name}`, value: e._id }));
        setCities(citiesOptions);
        setLoading(false);
        setError(null);
      } catch (err) {
        setError(err);
        setLoading(false);
        setCities(null);
      }
    })();

    return () => controller.abort();
  }, []);

  return {
    cities,
    loading,
    error,
  };
};
