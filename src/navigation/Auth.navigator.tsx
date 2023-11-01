import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Login.screen';
import { Register } from '../screens/Register.screen';

type AuthStackParams = {
  Login;
  Register;
};

const AuthStack = createStackNavigator<AuthStackParams>();

export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
};
