import {
  View,
  Text,
  Pressable,
  ScrollView,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {globalInputsStyles} from '@utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  RegisterRequest,
  SignupUserAPI,
  UpdateRequest,
  updateImageRequest,
} from '../../api/apiCall';
import {ArrowHeader} from '@components';
import ProfileImage from '../../assets/icons/profile.png';
import {useSelector} from 'react-redux';
import {token} from '@redux/tokenSlice';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export const AccountDetails = ({route, navigation}) => {
  const {profileDetails} = route.params;

  const userToken = useSelector(token);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [loading, setLoading] = useState(false);

  const [imageUri, setImageUri] = useState(
    profileDetails ? profileDetails.profile_pic : ProfileImage,
  );
  const [firstName, setFirstName] = useState(
    profileDetails ? profileDetails.first_name : '',
  );
  const [lastName, setLastName] = useState(
    profileDetails ? profileDetails.last_name : '',
  );
  const [dob, setDob] = useState(
    profileDetails ? profileDetails.date_of_birth : '',
  );
  const [nationality, setNationality] = useState(
    profileDetails ? profileDetails.nationality : '',
  );
  const [email, setEmail] = useState(
    profileDetails ? profileDetails.email : '',
  );
  const [occupation, setOccupation] = useState(
    profileDetails ? profileDetails.occupation : '',
  );
  const [instituteName, setInstituteName] = useState(
    profileDetails ? profileDetails.institution_name : '',
  );
  const [countryAddress, setCountryAddress] = useState(
    profileDetails ? profileDetails.country : '',
  );
  const [addressLine1, setAddressLine1] = useState(
    profileDetails ? profileDetails.address : '',
  );
  const [addressLine2, setAddressLine2] = useState(
    profileDetails ? profileDetails.address_two : '',
  );
  const [regionCapital, setRegionCapital] = useState(
    profileDetails ? profileDetails.region_capital : '',
  );
  const [phoneNumber, setPhoneNumber] = useState(
    profileDetails ? profileDetails.phone_number : '',
  );
  const updateProfileHandler = () => {
    setLoading(true);
    let data = new FormData();
    data.append('first_name', firstName);
    data.append('last_name', lastName);
    data.append('date_of_birth', dob);
    data.append('nationality', nationality);
    data.append('occupation', occupation);
    data.append('institution_name', instituteName);
    data.append('address', addressLine1);
    data.append('address_two', addressLine2);
    data.append('region_capital', regionCapital);
    data.append('email', email);
    data.append('country', countryAddress);
    data.append('phone_number', phoneNumber);
    UpdateRequest(userToken.token, data, 'api/customer/update-profile').then(
      response => {
        console.log('update profile api response :', response);
        // Alert.alert(response.data.message)
        if (response.data.success === true) {
          Alert.alert(response.data.message);
          setLoading(false);
          // navigation.navigate('LoginOtp', {phoneNumber: phoneNumber});
        } else {
          Alert.alert(response.data.message);
        }
      },
    );
  };
  const updateProfileImage = () => {
    let data = new FormData();
    data.append('image', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'adPhoto.png',
    });

    setLoading(true);

    updateImageRequest(
      userToken.token,
      data,
      'api/customer/update-profile-image',
    ).then(response => {
      console.log('api response :', response);
      if (response.data.success === true) {
        // Alert.alert(response.data.message)
        setLoading(false);
      } else {
        Alert.alert(response.data.message);
        setLoading(false);
      }
    });
  };
  const onPressUpdate = () => {
    updateProfileHandler();
    updateProfileImage();
  };

  const pickImage = () => {
    let options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = response.assets[0];
        console.log('selected Image :', source.uri);
        setImageUri(source.uri);
        // setAdImageName(source.fileName);
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
      <ArrowHeader heading="Account Details" />
      <Pressable style={styles.profileImageView} onPress={() => pickImage()}>
        <Image
          source={imageUri ? {uri: imageUri} : ProfileImage}
          style={styles.profileImage}
        />
      </Pressable>
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
            editable={false}
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Phone Number*</Text>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            placeholder="02112345678"
            editable={false}
          />
        </View>
        {/* <View style={globalInputsStyles.globalInputs}>
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
        </View> */}
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
        <Pressable style={styles.register} onPress={() => onPressUpdate()}>
          <Text style={styles.registerText}>Update</Text>
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