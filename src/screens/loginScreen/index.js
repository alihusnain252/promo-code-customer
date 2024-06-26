import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {MyTheme, customerUris, signInInputsStyles} from '@utils';
import {LoginPostRequest} from '../../api/apiCall';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';
import {updateToken} from '@redux/tokenSlice';
import {ArrowHeader} from '@components';

export const LogInScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const [noDisplay, setNoDisplay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const data = {
    phone_number: phoneNumber,
    password: password,
  };

  const loginHandler = () => {
    setLoading(true);
    let s = phoneNumber.toString();
    let num = phoneNumber.replace('.', '');
    const valid10Digit = () => {
      if (phoneNumber.length != 10) {
        // Alert.alert('phone number is not valid');
        setNoDisplay(true);
        setErrorText('phone number is not valid');
        setLoading(false);
      } else {
        if (parseInt(s.charAt(0)) !== 0) {
          // Alert.alert('First digit of phone number must be 0');
          setNoDisplay(true);
          setErrorText('First digit of phone number must be 0');

          setLoading(false);
        } else {
          LoginPostRequest(data, customerUris.login).then(response => {
            console.log('api response :', response);

            if (response.data.success === false) {
              setNoDisplay(true);
              setLoading(false);
              setErrorText(response.data.message);
            } else {
              if (response.data.data.length === 0) {
                setErrorText(response.data.message);
                setNoDisplay(true);
                setLoading(false);
              } else {
                setLoading(false);
                dispatch(
                  updateToken(
                    response.data.data.token ? response.data.data.token : '',
                  ),
                  navigation.navigate('Dashboard'),
                );
              }
            }
          });
        }
      }
    };
    const valid14Digit = () => {
      if (phoneNumber.length != 14) {
        // Alert.alert('phone number is not valid');
        setNoDisplay(true);
        setErrorText('phone number is not valid');
        setLoading(false);
      } else {
        if (
          parseInt(s.charAt(0)) != '+' &&
          parseInt(s.charAt(1)) != '2' &&
          parseInt(s.charAt(2)) != '3' &&
          parseInt(s.charAt(3)) != '3'
        ) {
          // Alert.alert('First digits of phone number must be +233');
          setNoDisplay(true);
          setErrorText('First digits of phone number must be +233');
          setLoading(false);
        } else {
          LoginPostRequest(data, customerUris.login).then(response => {
            console.log('api response :', response);

            if (response.data.success === false) {
              setNoDisplay(true);
              setLoading(false);
              setErrorText(response.data.message);
            } else {
              if (response.data.data.length === 0) {
                setErrorText(response.data.message);
                setNoDisplay(true);
                setLoading(false);
              } else {
                setLoading(false);
                dispatch(
                  updateToken(
                    response.data.data.token ? response.data.data.token : '',
                  ),
                );
                navigation.navigate('Dashboard');
              }
            }
          });
        }
      }
    };
    phoneNumber === ''
      ? (setNoDisplay(true),
        setErrorText('please Add Phone Number'),
        setLoading(false))
      : password === ''
      ? (setNoDisplay(true),
        setErrorText('please Add Password'),
        setLoading(false))
      : isNaN(num)
      ? (setNoDisplay(true),
        setErrorText('please add Numbers'),
        setLoading(false))
      : phoneNumber.length <= 10
      ? valid10Digit()
      : phoneNumber.length > 10 <= 14
      ? valid14Digit()
      : null;
  };
  const recoverHandler = () => {
    navigation.navigate('RecoverPassword');
  };

  const numberValidations = value => {
    let s = value.toString();
    if (parseInt(s.charAt(0)) !== 0) {
      // Alert.alert('First number must be 0')
    } else {
      let num = value.replace('.', '');
      if (isNaN(num)) {
        // Alert.alert("please add Numbers")
      } else {
        setPhoneNumber(num);
      }
    }
  };

  return (
    <View style={styles.loginContainer}>
      <ArrowHeader />
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
            onChangeText={value => setPhoneNumber(value)}
            value={phoneNumber}
            placeholder="Phone Number "
            placeholderTextColor={MyTheme.grey100}
            keyboardType="phone-pad"
            maxLength={14}
          />
        </View>
        <View style={noDisplay === true ? styles.errorView : styles.noDisplay}>
          <MaterialIcons name="error-outline" size={20} color="#E65C89" />
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
        <View style={signInInputsStyles.inputView}>
          <Image
            source={require('../../assets/icons/lock.png')}
            style={signInInputsStyles.imgStyle2}
          />
          <TextInput
            style={signInInputsStyles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            placeholderTextColor={MyTheme.grey100}
            secureTextEntry={showPassword ? false : true}
          />
          {!showPassword ? (
            <Pressable
              style={{paddingHorizontal: '5%'}}
              onPress={() => setShowPassword(true)}>
              <Feather name="eye" size={20} color={MyTheme.yellow} />
            </Pressable>
          ) : (
            <Pressable
              style={{paddingHorizontal: '5%'}}
              onPress={() => setShowPassword(false)}>
              <Feather name="eye-off" size={20} color={MyTheme.yellow} />
            </Pressable>
          )}
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
        <View style={loading === false ? {display: 'none'} : {marginTop: 20}}>
          <ActivityIndicator size={36} color={MyTheme.yellow} />
        </View>
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
