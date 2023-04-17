import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {TopHeader, BottomBar} from '@components';
import {customerUris, globalInputsStyles} from '@utils';
import {ArrowHeader} from '../../components';
import {PostRequest, PostRequestWithToken} from '../../api/apiCall';
import {useSelector} from 'react-redux';
import {token} from '../../redux/tokenSlice';
import {MyTheme} from '../../utils';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const RecoverPassword = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [noDisplay, setNoDisplay] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [loading, setLoading] = useState(false);
  const userToken = useSelector(token);

  const searchHandler = () => {
    setLoading(true);
    const data = {phone_number: phoneNumber};
    setLoading(true);
    let s = phoneNumber.toString();
    let num = phoneNumber.replace('.', '');
    phoneNumber === ''
      ? (setNoDisplay(true),
        setErrorText('please Add Phone Number'),
        setLoading(false))
      : parseInt(s.charAt(0)) !== 0
      ? (setNoDisplay(true),
        setErrorText('First digit of phone number must be 0'),
        setLoading(false))
      : isNaN(num)
      ? (setNoDisplay(true),
        setErrorText('please add Numbers'),
        setLoading(false))
      : PostRequest(data, customerUris.forgotPasswordRequest).then(res => {
          console.log('validate customer res :', res);
          setLoading(false);
          if (res.data.success) {
            Alert.alert('otp  :' + res.data.data.code);
            setNoDisplay(false);
            setLoading(false);
            navigation.navigate('LoginOtp', {
              phoneNumber: res.data.data.phone_number,
              forgot: true,
            });
          } else {
            setNoDisplay(true);
            setLoading(false);
            setErrorText(res.data.message);
          }
        });

    //   if (phoneNumber === '') {
    //     setNoDisplay(true);
    //     setLoading(false);
    //     setErrorText('please Add Phone Number');
    //   } else {
    //     PostRequest(data, customerUris.forgotPasswordRequest).then(res => {
    //       console.log('validate customer res :', res);
    //       setLoading(false);
    //       if (res.data.success) {
    //         Alert.alert('otp  :' + res.data.data.code);
    //         setNoDisplay(false);
    //         setLoading(false);
    //         navigation.navigate('LoginOtp', {
    //           phoneNumber: res.data.data.phone_number,
    //           forgot: true,
    //         });
    //       } else {
    //         setNoDisplay(true);
    //         setLoading(false);
    //         setErrorText(res.data.message);
    //       }
    //     });
    //   }
  };

  // const numberValidations = value => {
  //   let s = value.toString();
  //   if (parseInt(s.charAt(0)) !== 0) {
  //     // Alert.alert('First number must be 0')
  //   } else {
  //     let num = value.replace('.', '');
  //     if (isNaN(num)) {
  //       // Alert.alert("please add Numbers")
  //     } else {
  //       setPhoneNumber(num);
  //     }
  //   }
  // };

  return (
    <View style={styles.validateContainer}>
      <ArrowHeader heading="Forgot Password" />
      <View style={styles.body}>
        {/* <Text style={styles.validateText}>Validate Customer</Text> */}
        <Text style={styles.phoneText}>Phone Number #</Text>
        <TextInput
          style={noDisplay === false ? globalInputsStyles.input : styles.input}
          placeholder="0212345678"
          placeholderTextColor={MyTheme.grey100}
          value={phoneNumber}
          onChangeText={value => setPhoneNumber(value)}
          keyboardType="numeric"
          maxLength={10}
        />
        <View style={noDisplay === false ? styles.noDisplay : styles.notFound}>
          <MaterialIcons name="error-outline" size={25} color="red" />
          <Text style={styles.notFoundText}>{errorText}</Text>
        </View>
        <Pressable style={styles.search} onPress={() => searchHandler()}>
          <Text style={styles.searchText}>Search</Text>
        </Pressable>

        <View style={loading === false ? {display: 'none'} : {marginTop: 20}}>
          <ActivityIndicator size={36} color={MyTheme.yellow} />
        </View>
      </View>
    </View>
  );
};
