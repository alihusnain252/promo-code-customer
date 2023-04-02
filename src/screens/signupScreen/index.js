import {View, Text, Pressable, ScrollView, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {globalInputsStyles} from '@utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SignupUserAPI } from '../../api/apiCall';

export const SignupScreen = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [nationality, setNationality] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("")
  const [occupation, setOccupation] = useState('');
  const [instituteName, setInstituteName] = useState('');
  const [countryAddress, setCountryAddress] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [regionCapital, setRegionCapital] = useState('');



  const [loading, setLoading] = useState(false)


  const body = {
    "fullName":fullName,
    "dateOfBirth":dob,
    "nationality":nationality,
    "occupation":occupation,
    "instituteName":instituteName,
    "countryAddress":countryAddress,
    "email": email,
    "password": password,
    "addressLine1": addressLine1,
    "addressLine2": addressLine2,
    "regionCapital": regionCapital,
  };


  const signupHandler = () => {
    setLoading(true)
    SignupUserAPI(body).then((response) => {
      console.log("api response :", response);
      Alert.alert(response.data.message)
      setLoading(false)
      navigation.goBack()
    });
  };



  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const dt=new Date(date)
    const x =dt.toISOString().split('T')
    const x1 = x[0].split('-')
    console.log(x1[2]+"/"+x1[1]+"/"+x1[0]);
    setDob(x1[2]+"/"+x1[1]+"/"+x1[0])
    hideDatePicker();
  };


  return (
    <View style={styles.signupContainer}>
      <View style={styles.signupHeader}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={25} color="#000" />
        </Pressable>
        <Text style={styles.signUpHeaderText}>Sign Up</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>full name*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setFullName}
            value={fullName}
            placeholder="john Smith"
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
            <Pressable style={styles.datePress} onPress={()=>{showDatePicker()}}>
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
