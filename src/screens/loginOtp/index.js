import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const LoginOtp = ({navigation}) => {
  return (
    <View style={styles.otpContainer}>
      <View style={styles.otpHeader}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={25} color="#000" />
        </Pressable>
        <Text style={styles.otpHeaderText}>Verification Code</Text>
      </View>
      <Pressable style={styles.conform} onPress={() => loginHandler()}>
        <Text style={styles.conformText}>Conform</Text>
      </Pressable>
    </View>
  );
};
