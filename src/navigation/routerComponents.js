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
  SearchVendor,
  AccountDetails,
  UpdatePassword,
  RecoverPassword,
  ResetPassword,
  AllVendors,
  VendorDetails,
} from '@screens';
import {TopHeader} from '@components';
import {useSelector} from 'react-redux';
import {token} from '@redux/tokenSlice';
import { MyTheme } from '@utils';

const Stack = createNativeStackNavigator();

export const RouterComponents = () => {
  const userToken = useSelector(token);
  console.log('userToken :', userToken);

  return (
    <NavigationContainer>
      {userToken.token === '' ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            statusBarColor: 'white',
            statusBarStyle: 'dark',
          }}>
          <Stack.Screen name="Login" component={LogInScreen} />
          <Stack.Screen name="LoginOtp" component={LoginOtp} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            statusBarColor: 'white',
            statusBarStyle: 'dark',
          }}>
          <Stack.Screen name="Dashboard" component={Dashboard} 
            options={{statusBarColor:MyTheme.primary,statusBarStyle:"dark"}}/>
          <Stack.Screen name="PromoDetails" component={PromoDetails} />
          <Stack.Screen
            name="AccountScreen"
            component={AccountScreen}
            options={{statusBarHidden: true}}
          />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="Favorite" component={Favorite} />
          <Stack.Screen name="TopHeader" component={TopHeader} />
          <Stack.Screen name="SearchVendor" component={SearchVendor} />
          <Stack.Screen name="AccountDetails" component={AccountDetails} />
          <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
          <Stack.Screen name="AllVendors" component={AllVendors} />
          <Stack.Screen name="VendorDetails" component={VendorDetails} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
