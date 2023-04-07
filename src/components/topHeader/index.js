import {View, Text, Pressable, Image} from 'react-native';
import React, { useState } from 'react';
import {styles} from './styles';

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { token } from '@redux/tokenSlice';
import { GetRequest } from '../../api/apiCall';

export const TopHeader = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false)
  const [imageUri, setImageUri] = useState("")


  const userToken = useSelector(token);

  const userProfile = () => {
    setLoading(true);
    GetRequest(userToken.token, 'api/customer/user').then(res => {
      console.log('user Profile data', res.data.data.profile_pic);
      if (res.data.success === true) {
        setImageUri(res.data.data.profile_pic);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      userProfile();
    }, []),
  );




  return (
    <View style={styles.topContainer}>
      <View style={styles.topBody}>
        <View style={styles.profile}>
          <Pressable onPress={() => navigation.navigate('AccountScreen')}>
            <Image
              source={imageUri === ""? require('../../assets/icons/profile.png'):{uri:imageUri}}
              style={styles.profileImage}
            />
          </Pressable>
        </View>
        <View style={styles.icon}>
          <Pressable>
            <Image
              source={require('../../assets/icons/icon.png')}
              style={styles.iconImage}
            />
          </Pressable>
        </View>
        <View style={styles.notification}>
          <Pressable onPress={() => navigation.navigate('Notifications')}>
            <Image
              source={require('../../assets/icons/notification.png')}
              style={styles.notificationImage}
            />
            <View style={styles.dot}></View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
