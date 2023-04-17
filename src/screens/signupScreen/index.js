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
import {MyTheme, customerUris, globalInputsStyles} from '@utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {RegisterRequest, SignupUserAPI} from '../../api/apiCall';
import {ArrowHeader} from '@components';

export const SignupScreen = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [nationality, setNationality] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [occupation, setOccupation] = useState('');
  const [instituteName, setInstituteName] = useState('');
  const [countryAddress, setCountryAddress] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [regionCapital, setRegionCapital] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [conformPassword, setConformPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const signupHandler = () => {
    setLoading(true);
    let data = new FormData();
    data.append('first_name', firstName);
    data.append('last_name', lastName);
    data.append('date_of_birth', dob);
    data.append('nationality', nationality);
    data.append('occupation', occupation);
    data.append('institution_name', instituteName);
    data.append('address', addressLine1);
    data.append('password', password);
    data.append('password_confirmation', conformPassword);
    data.append('address_two', addressLine2);
    data.append('region_capital', regionCapital);
    data.append('email', email);
    data.append('country', countryAddress);
    data.append('phone_number', phoneNumber);

    let s = phoneNumber.toString();
    let num = phoneNumber.replace('.', '');

    firstName === ''
      ? Alert.alert('Please add First Name')
      : lastName === ''
      ? Alert.alert('Please add Last Name')
      : dob === ''
      ? Alert.alert('Please add Date of Birth')
      : nationality === ''
      ? Alert.alert('Please add Nationality')
      : email === ''
      ? Alert.alert('Please add Email')
      : phoneNumber === ''
      ? Alert.alert('Please add Phone Number ')
      : parseInt(s.charAt(0)) !== 0
      ? Alert.alert('First digit of phone number must be 0')
      : isNaN(num)
      ? Alert.alert('please add Numbers')
      : password === ''
      ? Alert.alert('Please add Password ')
      : conformPassword != password
      ? Alert.alert('Password not match ')
      : occupation === ''
      ? Alert.alert('Please add Occupation')
      : instituteName === ''
      ? Alert.alert('Please add Institute Name')
      : addressLine1 === ''
      ? Alert.alert('Please add Address Line 1')
      : addressLine2 === ''
      ? Alert.alert('Please add Address Line 2')
      : regionCapital === ''
      ? Alert.alert('Please add Region Capital')
      : countryAddress === ''
      ? Alert.alert('Please add Country Name')
      : RegisterRequest(data, customerUris.register).then(response => {
          if (response.data.success === true) {
            console.log('api response :', response.data.data.code);
            Alert.alert('otp :' + response.data.data.code);
            setLoading(false);
            navigation.navigate('LoginOtp', {
              phoneNumber: phoneNumber,
              forgot: false,
            });
          } else {
            console.log('response', response);
            if (response.data.error) {
              Alert.alert(
                'Error',
                Object.values(response.data.error).toString(),
              );
            } else {
              Alert.alert(response.data.message);
            }
          }
        });
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    const dt = new Date(date);
    const x = dt.toISOString().split('T');
    const x1 = x[0].split('-');
    console.log(x1[2] + '/' + x1[1] + '/' + x1[0]);
    setDob(x1[2] + '/' + x1[1] + '/' + x1[0]);
    hideDatePicker();
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
    <View style={styles.signupContainer}>
      <ArrowHeader heading="Sign Up" />
      <ScrollView style={styles.scrollView}>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>First name*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setFirstName}
            value={firstName}
            placeholder="First Name"
            placeholderTextColor={MyTheme.grey100}
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Last name*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setLastName}
            value={lastName}
            placeholder="Last Name"
            placeholderTextColor={MyTheme.grey100}
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Date of birth*</Text>
          <Pressable
            style={globalInputsStyles.input}
            onPress={() => {
              showDatePicker();
            }}>
            <TextInput
              style={styles.dateInput}
              onChangeText={setDob}
              value={dob}
              placeholder="Date of Birth"
              placeholderTextColor={MyTheme.grey100}
              editable={false}
            />
            <Pressable
              style={styles.datePress}
              onPress={() => {
                showDatePicker();
              }}>
              <EvilIcons name="calendar" size={30} color="#000" />
            </Pressable>
          </Pressable>
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Nationality*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setNationality}
            value={nationality}
            placeholder="Nationality"
            placeholderTextColor={MyTheme.grey100}
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>email*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="youremail@gmail.com"
            placeholderTextColor={MyTheme.grey100}
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Phone Number*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={value => numberValidations(value)}
            value={phoneNumber}
            placeholder="Phone Number"
            placeholderTextColor={MyTheme.grey100}
            maxLength={10}
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Password*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Set Password"
            placeholderTextColor={MyTheme.grey100}
            secureTextEntry={true}
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Conform Password*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setConformPassword}
            value={conformPassword}
            placeholder="Conform Password"
            placeholderTextColor={MyTheme.grey100}
            secureTextEntry={true}
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>occupation*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setOccupation}
            value={occupation}
            placeholder="Your Occupation Name"
            placeholderTextColor={MyTheme.grey100}
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Institution Name*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setInstituteName}
            value={instituteName}
            placeholder="Institution name"
            placeholderTextColor={MyTheme.grey100}
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Country Address*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setCountryAddress}
            value={countryAddress}
            placeholder="Country address"
            placeholderTextColor={MyTheme.grey100}
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Address Line 1*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setAddressLine1}
            value={addressLine1}
            placeholder="Address line #1"
            placeholderTextColor={MyTheme.grey100}
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Address Line 2*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setAddressLine2}
            value={addressLine2}
            placeholder="Address line #2"
            placeholderTextColor={MyTheme.grey100}
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Region Capital*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setRegionCapital}
            value={regionCapital}
            placeholder=" Capital name "
            placeholderTextColor={MyTheme.grey100}
          />
        </View>
        <Pressable style={styles.register} onPress={() => signupHandler()}>
          <Text style={styles.registerText}>Register</Text>
        </Pressable>
      </ScrollView>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};
