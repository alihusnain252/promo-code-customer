import { View, Text, Pressable, TextInput, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { updateToken } from '@redux/tokenSlice';
import { LoginUserAPI } from '../../api/apiCall';
import { MyTheme } from '@utils';

export const LoginOtp = ({ navigation }) => {


  const [loading, setLoading] = useState(false)
  const dispatch =useDispatch()



  const body = {
    "email": "azeemulrehman6@gmail.com",
    "password": "secret",
  };


  const loginHandler = () => {
    setLoading(true)
    LoginUserAPI(body).then((response) => {
      console.log("api response :", response);
      setLoading(false)
      dispatch(
        updateToken(response.data.data.token ? response.data.data.token : "")
      );
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
      showAlertMethod('Error', 'Enter 4 digit otp', setShowAlert, setAlertTitle, setAlertMessage);


    }
  }


  const renderInputs = () => {
    const inputs = Array(4).fill(0);
    const txtContainer = inputs.map(
      (i, j) =>
        <TextInput onChangeText={v => focusNext(j, v)}
          onKeyPress={e => focusPrevious(e.nativeEvent.key, j)}
          maxLength={1}
          key={j}
          keyboardType="numeric"
          autoCapitalize='none'
          ref={(input) => textInputFields[j] = input}
          style={styles.textInput} />,
    );
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

      <View style={styles.inputContainer}>
        {renderInputs()}
      </View>

      <View style={loading === false ? {display:"none"}:{marginTop:20}}>
          <ActivityIndicator size={36} color={MyTheme.yellow} />
        </View>

      <Pressable style={styles.conform} onPress={() => loginHandler()}>
        <Text style={styles.conformText}>Conform</Text>
      </Pressable>
    </View>
  );
};
