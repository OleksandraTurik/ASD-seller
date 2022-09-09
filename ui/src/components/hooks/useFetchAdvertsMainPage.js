import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertsThunk } from 'redux/slice/getAdverts';

const useFetchAdvertMainPage = () => {
  const adverts = useSelector(state => state.getAdverts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdvertsThunk());
  }, [dispatch]);

  return { ...adverts };
};

export default useFetchAdvertMainPage;
