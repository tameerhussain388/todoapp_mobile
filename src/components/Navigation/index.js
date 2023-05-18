import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import fonts from '../../Assets/fonts';
import Auth from './AuthNavigation/Auth';
import MainFlow from './MainFlowNavigation/MainFlow';
import Delay from '../../Screens/Delay';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          options={{title: 'Sign In'}}
          name="test"
          component={Delay}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="auth"
          component={Auth}
        />

        <Stack.Screen
          options={{title: 'Home'}}
          name="mainFlow"
          component={MainFlow}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
