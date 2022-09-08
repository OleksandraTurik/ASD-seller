import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from 'redux/slice/getCategories';

const useFetchCategories = () => {
  const categories = useSelector(state => state.categoryReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return { ...categories };
};

export default useFetchCategories;
