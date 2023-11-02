import { useIsLoggedIn } from '../hooks/useIsLoggedIn';
import { AuthStackNavigator } from './Auth.navigator';
import { DrawerNavigator } from './Drawer.navigator';

export const MainNavigation = () => {
  const { isLoggedIn } = useIsLoggedIn();

  return isLoggedIn ? <DrawerNavigator /> : <AuthStackNavigator />;
};
