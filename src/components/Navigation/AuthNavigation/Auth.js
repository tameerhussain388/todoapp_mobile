import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignupScreen from '../../../Screens/AuthScreens/SignupScreen';
import SigninScreen from '../../../Screens/AuthScreens/SigninScreen';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        options={{title: 'Sign In'}}
        name="signin"
        component={SigninScreen}
      />
      <Stack.Screen
        options={{title: 'Sign Up'}}
        name="signup"
        component={SignupScreen}
      />
    </Stack.Navigator>
  );
};

export default Auth;
