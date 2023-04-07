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
import {MyTheme, signInInputsStyles} from '@utils';
import {LoginPostRequest} from '../../api/apiCall';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {updateToken} from '@redux/tokenSlice';

export const LogInScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const [noDisplay, setNoDisplay] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const data = {
    phone_number: phoneNumber,
    password: password,
  };

  const loginHandler = () => {
    setLoading(true);
    LoginPostRequest(data, 'api/customer/login').then(response => {
      console.log('api response :', response.data);

      if (response.data.success === false) {
        setNoDisplay(true);
        setErrorText(response.data.message);
        setLoading(false);
      } else {
        setLoading(false);
        dispatch(
          updateToken(response.data.data.token ? response.data.data.token : ''),
        );
      }
    });
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
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            placeholder="Phone Number / UserID"
            keyboardType="numeric"
          />
        </View>
        <View style={noDisplay === true ? styles.errorView : styles.noDisplay}>
          <MaterialIcons name="error-outline" size={20} color="red" />
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
