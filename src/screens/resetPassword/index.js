import {
  View,
  Text,
  Pressable,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {customerUris, globalInputsStyles} from '@utils';
import {ArrowHeader} from '@components';
import {PostRequestWithToken} from '../../api/apiCall';
import {useSelector} from 'react-redux';
import {token} from '@redux/tokenSlice';

export const ResetPassword = ({route, navigation}) => {
  const {phoneNumber} = route.params;
  const userToken = useSelector(token);

  const [newPassword, setNewPassword] = useState('');
  const [conformNewPassword, setConformNewPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const updatePasswordHandle = () => {
    setLoading(true);
    let data = {
      phone_number: phoneNumber,
      password: newPassword,
      password_confirmation: conformNewPassword,
    };
    PostRequestWithToken(
      userToken.token,
      data,
      customerUris.resetPassword,
    ).then(response => {
      console.log('api response :', response);
      // Alert.alert(response.data.message)
      if (response.data.success) {
        Alert.alert('', response.data.message, [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => navigation.navigate('Login')},
        ]);
        setLoading(false);
      } else {
        Alert.alert('Alert', response.data.message, [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      }
    });
  };

  return (
    <View style={styles.signupContainer}>
      <ArrowHeader heading="Update Password" />
      <ScrollView style={styles.scrollView}>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>New Password*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setNewPassword}
            value={newPassword}
            placeholder="New Password"
            secureTextEntry={true}
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>
            Conform New Password*
          </Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setConformNewPassword}
            value={conformNewPassword}
            placeholder="Conform New Password"
            secureTextEntry={true}
          />
        </View>
        <Pressable
          style={styles.register}
          onPress={() => updatePasswordHandle()}>
          <Text style={styles.registerText}>Reset</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};
