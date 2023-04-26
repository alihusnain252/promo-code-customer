import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-community/async-storage';
import {UpdateRequest} from '../../api/apiCall';
import {customerUris} from '../customerUris';

const updateFcmToken = (userToken, fcmToken) => {
  let data = new FormData();
  data.append('fcm_token', fcmToken);
  if (userToken.token !== '') {
    UpdateRequest(userToken.token, data, customerUris.profileUpdate).then(
      response => {
        console.log('update FCM token successfully:', response);
      },
    );
  }
};

export const requestUserPermission = async userToken => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    // console.log('Authorization status:', authStatus);
    getFCMToken(userToken);
  }
};

const getFCMToken = async userToken => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');

  // console.log('the old token', fcmToken);
  if (!fcmToken) {
    try {
      let fcmToken = await messaging().getToken();
      console.log('new fcmToken', fcmToken);
      if (fcmToken) {
        await AsyncStorage.setItem('fcmToken', fcmToken);
        updateFcmToken(userToken, fcmToken);
      }
    } catch (error) {
      console.log('fcmToken error', error);
    }
  }
};
export const notificationListener = async () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    // console.log(
    //   'Notification caused app to open from background state:',
    //   remoteMessage.notification,
    // );
  });

  messaging().onMessage(async remoteMessage => {
    console.log('received in foreground', remoteMessage);
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });
};
