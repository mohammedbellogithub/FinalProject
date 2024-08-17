import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Layout from './app/(dashboard)/_layout';
import Home from './app/(dashboard)/Home';
import Welcome from './app/(screens)/Welcome';
import Login from './app/(screens)/Login';
import ForgotPassword from './app/(screens)/ForgotPassword';
import NewPassword from './app/(screens)/NewPassword';
import OTPVerification from './app/(screens)/OTPVerification';
import SignUp from './app/(screens)/SignUp';
const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
        <Stack.Screen name="Layout" component={Layout}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
