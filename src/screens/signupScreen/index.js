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
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {RegisterRequest, SignupUserAPI} from '../../api/apiCall';
import { ArrowHeader } from '@components';

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

  const body = {
    fullName: firstName,
    dateOfBirth: dob,
    nationality: nationality,
    occupation: occupation,
    instituteName: instituteName,
    countryAddress: countryAddress,
    email: email,
    password: password,
    addressLine1: addressLine1,
    addressLine2: addressLine2,
    regionCapital: regionCapital,
  };

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
    RegisterRequest(data, customerUris.register).then(response => {
      if (response.data.success === true) {
        console.log('api response :', response.data.data.code);
        Alert.alert(response.data.message);
        setLoading(false);
        navigation.navigate('LoginOtp', {
          phoneNumber: phoneNumber,
          forgot: false,
        });
      } else {
        Alert.alert(response.data.message);
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
            placeholder="john"
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Last name*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setLastName}
            value={lastName}
            placeholder="Smith"
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Date of birth*</Text>
          <View style={globalInputsStyles.input}>
            <TextInput
              style={styles.dateInput}
              onChangeText={setDob}
              value={dob}
              placeholder="10/10/2007"
            />
            <Pressable
              style={styles.datePress}
              onPress={() => {
                showDatePicker();
              }}>
              <EvilIcons name="calendar" size={30} color="#000" />
            </Pressable>
          </View>
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Nationality*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setNationality}
            value={nationality}
            placeholder="USA"
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>email*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="youremail@gmail.com"
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Phone Number*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            placeholder="02112345678"
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Password*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="*********"
            secureTextEntry={true}
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Conform Password*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setConformPassword}
            value={conformPassword}
            placeholder="*********"
            secureTextEntry={true}
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>occupation*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setOccupation}
            value={occupation}
            placeholder="Manager of a company"
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Institution Name*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setInstituteName}
            value={instituteName}
            placeholder="Institution name here"
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Country Address*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setCountryAddress}
            value={countryAddress}
            placeholder="USA"
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Address Line 1*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setAddressLine1}
            value={addressLine1}
            placeholder="#123, Dummy Street, Usa"
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Address Line 2*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setAddressLine2}
            value={addressLine2}
            placeholder="#123, Dummy Street, Usa"
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Region Capital*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setRegionCapital}
            value={regionCapital}
            placeholder="Usa Capital here"
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
