// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LogInScreen,
  LoginOtp,
  SignupScreen,
  Dashboard,
  PromoDetails,
  AccountScreen,
  Notifications,
  Favorite,
} from '@screens';
import { TopHeader } from '@components';

const Stack = createNativeStackNavigator();

export const RouterComponents = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBarColor: 'white',
          statusBarStyle: 'dark',
        }}>
        <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen name="LoginOtp" component={LoginOtp} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="PromoDetails" component={PromoDetails} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} options={{statusBarHidden:true}} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="TopHeader" component={TopHeader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
