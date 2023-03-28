import {View, Text, TextInput, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {signInInputsStyles} from '@utils';

export const LogInScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = () => {
    navigation.navigate('LoginOtp');
  };
  const recoverHandler = () => {};

  return (
    <View style={styles.loginContainer}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Login✨</Text>
        <Text style={styles.welcomeText}>Welcome Back!</Text>
      </View>
      <View style={styles.loginInputs}>
        <View style={signInInputsStyles.inputView}>
          <Image
            source={require('../../assets/icons/fullName.png')}
            style={signInInputsStyles.imgStyle1}
          />
          <TextInput
            style={signInInputsStyles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Phone Number / UserID"
            keyboardType="numeric"
          />
        </View>
        <View style={signInInputsStyles.inputView}>
          <Image
            source={require('../../assets/icons/lock.png')}
            style={signInInputsStyles.imgStyle2}
          />
          <TextInput
            style={signInInputsStyles.input}
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={styles.loginBtns}>
        <Pressable
          style={styles.recoverPassword}
          onPress={() => recoverHandler()}>
          <Text style={styles.recoverText}>Recover Password</Text>
        </Pressable>
        <Pressable style={styles.login} onPress={() => loginHandler()}>
          <Text style={styles.loginText}>Login</Text>
        </Pressable>
      </View>
      <View style={styles.registerNow}>
        <Text style={styles.notMemberText}> Not a member?</Text>
        <Pressable
          style={styles.registerPress}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.registerText}>Register now</Text>
        </Pressable>
      </View>
    </View>
  );
};
