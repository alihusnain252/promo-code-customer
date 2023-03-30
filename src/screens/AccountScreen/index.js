import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import { styles } from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProfileImage from "../../assets/icons/profile.png"

export const AccountScreen = ({navigation}) => {
  return (
    <View style={styles.accountContainer}>
      <View style={styles.accountHeader}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={25} color="#000" />
        </Pressable>
      </View>
      <View style={styles.accountBody}>
        <View style={styles.profileImageView}>
          <Image source={ProfileImage} style={styles.profileImage}/>
        </View>
        <Text style={styles.userName}>John Smith</Text>
        <Text style={styles.userMail}>@johnsmith</Text>
        <Text style={styles.memberSince}>Member Since: 23 Mar 2023</Text>
        <View style={styles.accountBtns}>
          <Pressable style={styles.accountButton}>
            <Text style={styles.accountButtonText}>Account Detail</Text>
          </Pressable>
          <Pressable style={styles.accountButton}>
            <Text style={styles.accountButtonText}>About Saver Buddy</Text>
          </Pressable>
          <Pressable style={styles.accountButton}>
            <Text style={styles.accountButtonText}>Notifications</Text>
          </Pressable>
        </View>
        <View style={styles.logoutView}>
          <Pressable style={styles.logoutPress}>
            <Image source={require("../../assets/icons/logout.png")} style={styles.logoutIcon}/>
            <Text style={styles.logoutText}>Logout</Text>
          </Pressable>
        </View>

      </View>
    </View>
  );
};
