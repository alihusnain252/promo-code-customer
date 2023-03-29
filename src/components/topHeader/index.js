import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

export const TopHeader = () => {
  return (
    <View style={styles.topContainer}>
      <View style={styles.topBody}>
        <View style={styles.profile}>
          <Pressable>
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
          <Pressable>
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
