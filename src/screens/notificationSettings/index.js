import {View, Text, Pressable, ScrollView, Switch} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ArrowHeader} from '@components';
import {MyTheme, customerUris} from '@utils';
import {UpdateRequest} from '../../api/apiCall';
import {useSelector} from 'react-redux';
import {token} from '@redux/tokenSlice';

export const NotificationSettings = ({navigation}) => {
  const [newPromoEnabled, setNewPromoEnabled] = useState(false);
  const [orderEnabled, setOrderEnabled] = useState(false);
  const [promoUpdateEnabled, setPromoUpdateEnabled] = useState(false);

  const userToken = useSelector(token);
  const toggleNewSwitch = () =>
    setNewPromoEnabled(previousState => !previousState);
  const toggleOrderSwitch = () =>
    setOrderEnabled(previousState => !previousState);
  const toggleUpdateSwitch = () =>
    setPromoUpdateEnabled(previousState => !previousState);

  const updateNotification = () => {
    let data = new FormData();
    data.append('new_promotions', newPromoEnabled);
    data.append('order_updates', orderEnabled);
    data.append('promotion_updates', promoUpdateEnabled);
    if (userToken.token !== '') {
      UpdateRequest(
        userToken.token,
        data,
        customerUris.updateProfileNotifications,
      ).then(response => {
        console.log('update Notification successfully:', response);
      });
    }
  };
  useEffect(() => {
    updateNotification();
  }, [newPromoEnabled]);
  useEffect(() => {
    updateNotification();
  }, [orderEnabled]);
  useEffect(() => {
    updateNotification();
  }, [promoUpdateEnabled]);

  return (
    <View style={styles.notificationContainer}>
      <ArrowHeader heading="Notification Settings" />
      <View style={styles.notificationButton}>
        <Pressable style={styles.notificationPress}>
          <Text style={styles.notificationText}>New Promotions </Text>
          <Switch
            trackColor={{false: '#767577', true: MyTheme.black}}
            thumbColor={newPromoEnabled ? MyTheme.yellow : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleNewSwitch}
            value={newPromoEnabled}
          />
        </Pressable>
      </View>
      <View style={styles.notificationButton}>
        <Pressable style={styles.notificationPress}>
          <Text style={styles.notificationText}>Order Updates </Text>
          <Switch
            trackColor={{false: '#767577', true: MyTheme.black}}
            thumbColor={orderEnabled ? MyTheme.yellow : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleOrderSwitch}
            value={orderEnabled}
          />
        </Pressable>
      </View>
      <View style={styles.notificationButton}>
        <Pressable style={styles.notificationPress}>
          <Text style={styles.notificationText}>Promotion Updates </Text>
          <Switch
            trackColor={{false: '#767577', true: MyTheme.black}}
            thumbColor={promoUpdateEnabled ? MyTheme.yellow : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleUpdateSwitch}
            value={promoUpdateEnabled}
          />
        </Pressable>
      </View>
    </View>
  );
};
