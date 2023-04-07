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
import {MyTheme} from '@utils';
import {OtpContainer} from '@components';

export const LoginOtp = ({route, navigation}) => {
  const {phoneNumber} = route.params;

  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();

  const data = {
    phone_number: phoneNumber,
    otp_code: otp,
  };

  const loginHandler = () => {
    setLoading(true);
    PostRequest(data, 'api/customer/verify/otp').then(response => {
      console.log('api response :', response);
      if (response.data.success === false) {
        Alert.alert(response.data.message);
        setLoading(false);
      } else {
        Alert.alert(response.data.message);
        setLoading(false);
        navigation.navigate('Login');
      }
    });
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
