import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';

export const OtpContainer = ({setText}) => {
  const [otp, setOtp] = useState([1, 2, 3, 4]);
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
    let otpText = '';
    if (otp.length > 0) {
      otpText = otp[0] + otp[1] + otp[2] + otp[3] + otp[4] + otp[5];
    } else {
      otpText = '';
    }
    setText(otpText);
  };
  const checkOtpApi = () => {
    let otpText = '';
    if (otp.length > 0) {
      otpText = otp[0] + otp[1] + otp[2] + otp[3] + otp[4] + otp[5];
    } else {
      otpText = '';
    }
    if (otpText === '' || otpText.length < 4) {
      showAlertMethod(
        'Error',
        'Enter 6 digit otp',
        setShowAlert,
        setAlertTitle,
        setAlertMessage,
      );
    }
  };

  const renderInputs = () => {
    const inputs = Array(6).fill(0);
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
  return <View style={styles.inputContainer}>{renderInputs()}</View>;
};
