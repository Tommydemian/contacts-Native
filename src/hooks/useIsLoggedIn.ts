import { useAppSelector } from './useRedux';

export const useIsLoggedIn = () => {
  const isLoggedIn = useAppSelector(state => state.userReducer.isLoggedIn);

  return { isLoggedIn };
};
