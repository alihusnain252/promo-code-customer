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
  NotificationSettings,
} from '@screens';
import {TopHeader} from '@components';
import {useSelector} from 'react-redux';
import {token} from '@redux/tokenSlice';
import {MyTheme} from '@utils';
import {Easing} from 'react-native';
import {CardStyleInterpolators} from '@react-navigation/stack';

const Stack = createNativeStackNavigator();

export const RouterComponents = () => {
  const userToken = useSelector(token);

  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 50,
      mass: 3,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  const closeConfig = {
    animation: 'timing',
    config: {
      duration: 200,
      easing: Easing.linear,
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBarColor: MyTheme.primary,
          statusBarStyle: 'dark',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        }}>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            statusBarColor: MyTheme.primary,
            statusBarStyle: 'dark',
          }}
        />
        <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen name="LoginOtp" component={LoginOtp} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />

        <Stack.Screen name="PromoDetails" component={PromoDetails} />
        <Stack.Screen
          name="AccountScreen"
          component={AccountScreen}
          options={{
            statusBarHidden: true,
          }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{
            statusBarHidden: true,
          }}
        />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="TopHeader" component={TopHeader} />
        <Stack.Screen name="SearchVendor" component={SearchVendor} />
        <Stack.Screen name="AccountDetails" component={AccountDetails} />
        <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
        <Stack.Screen name="AllVendors" component={AllVendors} />
        <Stack.Screen name="VendorDetails" component={VendorDetails} />
        <Stack.Screen
          name="NotificationSettings"
          component={NotificationSettings}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
