import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

import { useNavigation } from '@react-navigation/native';

export const TopHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.topContainer}>
      <View style={styles.topBody}>
        <View style={styles.profile}>
          <Pressable onPress={()=>navigation.navigate("AccountScreen")}>
            <Image
              source={require('../../assets/icons/profile.png')}
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
          <Pressable onPress={()=>navigation.navigate("Notifications")}>
            <Image
              source={require('../../assets/icons/notification.png')}
              style={styles.notificationImage}
            />
            <View style={styles.dot} ></View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
