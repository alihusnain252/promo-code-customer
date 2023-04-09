import {
  View,
  Text,
  Pressable,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {updateToken} from '@redux/tokenSlice';
import {LoginUserAPI, PostRequest} from '../../api/apiCall';
import {MyTheme, customerUris} from '@utils';
import {OtpContainer} from '@components';

export const LoginOtp = ({route, navigation}) => {
  const {phoneNumber, forgot} = route.params;

  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();

  const data = {
    phone_number: phoneNumber,
    otp_code: otp,
  };

  const loginHandler = () => {
    setLoading(true);
    PostRequest(data, customerUris.verifyOtp).then(response => {
      console.log('api response :', response);
      if (response.data.success === false) {
        Alert.alert(response.data.message);
        setLoading(false);
      } else {
        Alert.alert(response.data.message);
        setLoading(false);
        navigation.navigate(forgot ? 'ResetPassword' : 'Login', {
          phoneNumber: phoneNumber,
        });
      }
    });
  };

  let textInputFields = [];
  const focusPrevious = (key, index) => {
    if (key === 'Backspace' && index !== 0) {
      textInputFields[index - 1].focus();
    }
  };
  const focusNext = (index, value) => {
    if (index < textInputFields.length - 1 && value) {
      textInputFields[index + 1].focus();
    }
    if (index === textInputFields.length - 1) {
      textInputFields[index].blur();
    }
    otp[index] = value;
    setOtp(otp);
  };
  const checkOtpApi = () => {
    let otpText = '';
    if (otp.length > 0) {
      otpText = otp[0] + otp[1] + otp[2] + otp[3];
    } else {
      otpText = '';
    }
    if (otpText === '' || otpText.length < 4) {
      // showAlertMethod('Error', 'Enter 4 digit otp', setShowAlert, setAlertTitle, setAlertMessage);
    }
  };

  const renderInputs = () => {
    const inputs = Array(4).fill(0);
    const txtContainer = inputs.map((i, j) => (
      <TextInput
        onChangeText={v => focusNext(j, v)}
        onKeyPress={e => focusPrevious(e.nativeEvent.key, j)}
        maxLength={1}
        key={j}
        keyboardType="numeric"
        autoCapitalize="none"
        ref={input => (textInputFields[j] = input)}
        style={styles.textInput}
      />
    ));
    return txtContainer;
  };

  return (
    <View style={styles.otpContainer}>
      <View style={styles.otpHeader}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={25} color="#000" />
        </Pressable>
        <Text style={styles.otpHeaderText}>Verification Code</Text>
      </View>

      <OtpContainer setText={setOtp} />

      <View style={loading === false ? {display: 'none'} : {marginTop: 20}}>
        <ActivityIndicator size={36} color={MyTheme.yellow} />
      </View>

      <Pressable style={styles.conform} onPress={() => loginHandler()}>
        <Text style={styles.conformText}>Conform</Text>
      </Pressable>
    </View>
  );
};
