import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExactUserInfoThunk } from 'redux/slice/getInfoExactUser';

export const useGetInfoExactUser = (id) => {
  const user = useSelector(state => state.exactUserInfoSlice);
  const dispatch = useDispatch();
  console.log(user);

  useEffect(() => {
    dispatch(getExactUserInfoThunk(id));
  }, [dispatch]);

  return { ...user };
};
