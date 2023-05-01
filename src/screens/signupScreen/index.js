import {
  View,
  Text,
  Pressable,
  ScrollView,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {
  MyTheme,
  customerUris,
  globalInputsStyles,
  requestUserPermission,
} from '@utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Feather from 'react-native-vector-icons/Feather';
import {
  GetCitiesRequest,
  RegisterRequest,
  SignupUserAPI,
} from '../../api/apiCall';
import {ArrowHeader, DropdownComponent} from '@components';

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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [allCities, setAllCities] = useState([]);
  const [city, setCity] = useState('');
  const allOccupations = [
    'Electrician',
    'Software Developer',
    'Agriculture',
    'Lawyer',
    'Construction Worker',
    'Auto Mechanic',
    'Cashier',
    'Sales',
    'Waiter',
    'chef',
    'Journalism',
    'Worker',
    'Bookkeeper',
  ];
  const allCountries = [
    'Afghanistan',
    'Åland Islands',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antarctica',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas (the)',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia (Plurinational State of)',
    'Bonaire, Sint Eustatius and Saba',
    'Bosnia and Herzegovina',
    'Botswana',
    'Bouvet Island',
    'Brazil',
    'British Indian Ocean Territory (the)',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cayman Islands (the)',
    'Central African Republic (the)',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands (the)',
    'Colombia',
    'Comoros (the)',
    'Congo (the Democratic Republic of the)',
    'Congo (the)',
    'Cook Islands (the)',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Curaçao',
    'Cyprus',
    'Czechia',
    "Côte d'Ivoire",
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic (the)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Falkland Islands (the) [Malvinas]',
    'Faroe Islands (the)',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'French Southern Territories (the)',
    'Gabon',
    'Gambia (the)',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Heard Island and McDonald Islands',
    'Holy See (the)',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran (Islamic Republic of)',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    "Korea (the Democratic People's Republic of)",
    'Korea (the Republic of)',
    'Kuwait',
    'Kyrgyzstan',
    "Lao People's Democratic Republic (the)",
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macao',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands (the)',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Micronesia (Federated States of)',
    'Moldova (the Republic of)',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands (the)',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger (the)',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'Northern Mariana Islands (the)',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine, State of',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines (the)',
    'Pitcairn',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Republic of North Macedonia',
    'Romania',
    'Russian Federation (the)',
    'Rwanda',
    'Réunion',
    'Saint Barthélemy',
    'Saint Helena, Ascension and Tristan da Cunha',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Martin (French part)',
    'Saint Pierre and Miquelon',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Sint Maarten (Dutch part)',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Georgia and the South Sandwich Islands',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan (the)',
    'Suriname',
    'Svalbard and Jan Mayen',
    'Sweden',
    'Switzerland',
    'Syrian Arab Republic',
    'Taiwan (Province of China)',
    'Tajikistan',
    'Tanzania, United Republic of',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands (the)',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates (the)',
    'United Kingdom of Great Britain and Northern Ireland (the)',
    'United States Minor Outlying Islands (the)',
    'United States of America (the)',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela (Bolivarian Republic of)',
    'Viet Nam',
    'Virgin Islands (British)',
    'Virgin Islands (U.S.)',
    'Wallis and Futuna',
    'Western Sahara',
    'Yemen',
    'Zambia',
    'Zimbabwe',
  ];

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
    data.append('address_two', addressLine2);
    data.append('password', password);
    data.append('password_confirmation', conformPassword);
    data.append('region_capital', regionCapital);
    data.append('email', email);
    data.append('country', 'ghana');
    data.append('phone_number', phoneNumber);

    let s = phoneNumber.toString();
    let num = phoneNumber.replace('.', '');
    const valid10Digit = () => {
      if (phoneNumber.length != 10) {
        Alert.alert('phone number is not valid');
        setLoading(false);
      } else {
        if (parseInt(s.charAt(0)) !== 0) {
          Alert.alert('First digit of phone number must be 0');
          setLoading(false);
        } else {
          RegisterRequest(data, customerUris.register).then(response => {
            if (response.data.success === true) {
              console.log('api response :', response.data.data.code);
              // Alert.alert('otp :' + response.data.data.code);
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
                setLoading(false);
              } else {
                Alert.alert(response.data.message);
                setLoading(false);
              }
            }
          });
        }
      }
    };
    const valid14Digit = () => {
      if (phoneNumber.length != 14) {
        Alert.alert('phone number is not valid');
        setLoading(false);
      } else {
        if (
          parseInt(s.charAt(0)) != '+' &&
          parseInt(s.charAt(1)) != '2' &&
          parseInt(s.charAt(2)) != '3' &&
          parseInt(s.charAt(3)) != '3'
        ) {
          Alert.alert('First digits of phone number must be +233');
          setLoading(false);
        } else {
          RegisterRequest(data, customerUris.register).then(response => {
            if (response.data.success === true) {
              console.log('api response :', response.data.data.code);
              // Alert.alert('otp :' + response.data.data.code);
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
                setLoading(false);
              } else {
                Alert.alert(response.data.message);
                setLoading(false);
              }
            }
          });
        }
      }
    };

    firstName === ''
      ? (Alert.alert('Please add First Name'), setLoading(false))
      : lastName === ''
      ? (Alert.alert('Please add Last Name'), setLoading(false))
      : dob === ''
      ? (Alert.alert('Please add Date of Birth'), setLoading(false))
      : // : nationality === ''
      // ? (Alert.alert('Please add Nationality'), setLoading(false))
      email === ''
      ? (Alert.alert('Please add Email'), setLoading(false))
      : phoneNumber === ''
      ? (Alert.alert('Please add Phone Number '), setLoading(false))
      : password === ''
      ? (Alert.alert('Please add Password '), setLoading(false))
      : conformPassword != password
      ? (Alert.alert('Password not match '), setLoading(false))
      : occupation === ''
      ? (Alert.alert('Please add Occupation'), setLoading(false))
      : instituteName === ''
      ? (Alert.alert('Please add Institute Name'), setLoading(false))
      : addressLine1 === ''
      ? (Alert.alert('Please add Address Line 1'), setLoading(false))
      : regionCapital === ''
      ? (Alert.alert('Please add Region Capital'), setLoading(false))
      : addressLine2 === ''
      ? (Alert.alert('Please add Address Line 2'), setLoading(false))
      : isNaN(num)
      ? (Alert.alert('please add Numbers'), setLoading(false))
      : phoneNumber.length <= 10
      ? valid10Digit()
      : phoneNumber.length > 10 <= 14
      ? valid14Digit()
      : null;
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

  // const numberValidations = value => {
  //   if (value !== "") {
  //     let s = value.toString();
  //   if (parseInt(s.charAt(0)) !== 0 ) {
  //     // Alert.alert('First number must be 0')
  //   } else {
  //     let num = value.replace('.', '');
  //     if (isNaN(num)) {
  //       // Alert.alert("please add Numbers")
  //     } else {
  //       setPhoneNumber(value);
  //     }
  //   }
  //   }
  // };

  const getAllCities = () => {
    setLoading(true);
    GetCitiesRequest(customerUris.allCities).then(res => {
      if (res.data.success === true) {
        console.log('all cities', res.data.data);
        setAllCities(res.data.data);
        setLoading(false);
      } else {
        Alert.alert(res.data.message);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    getAllCities();
  }, []);

  return (
    <View style={styles.signupContainer}>
      <ArrowHeader heading="Sign Up" />
      <View
        style={
          loading === false
            ? {display: 'none'}
            : {position: 'absolute', top: '50%', left: '50%', zIndex: 1}
        }>
        <ActivityIndicator size={36} color={MyTheme.yellow} />
      </View>
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
          <View style={styles.input}>
            <DropdownComponent
              setCity={setNationality}
              allCities={allCountries}
              signup={true}
              placeholder={'Region'}
            />
          </View>
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Region Capital*</Text>
          <View style={styles.input}>
            <DropdownComponent
              setCity={setRegionCapital}
              allCities={allCities}
              signup={true}
              placeholder={'Region'}
            />
          </View>
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
            onChangeText={value => setPhoneNumber(value)}
            value={phoneNumber}
            placeholder="Phone Number"
            placeholderTextColor={MyTheme.grey100}
            keyboardType="phone-pad"
            maxLength={14}
          />
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Password*</Text>
          <View style={globalInputsStyles.input}>
            <TextInput
              style={{width: '90%'}}
              onChangeText={setPassword}
              value={password}
              placeholder="Set Password"
              placeholderTextColor={MyTheme.grey100}
              secureTextEntry={showPassword ? false : true}
            />
            {!showPassword ? (
              <Pressable
                style={{paddingHorizontal: '5%'}}
                onPress={() => setShowPassword(true)}>
                <Feather name="eye" size={20} color={MyTheme.grey100} />
              </Pressable>
            ) : (
              <Pressable
                style={{paddingHorizontal: '5%'}}
                onPress={() => setShowPassword(false)}>
                <Feather name="eye-off" size={20} color={MyTheme.grey100} />
              </Pressable>
            )}
          </View>
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Conform Password*</Text>
          <View style={globalInputsStyles.input}>
            <TextInput
              style={{width: '90%'}}
              onChangeText={setConformPassword}
              value={conformPassword}
              placeholder="Conform Password"
              placeholderTextColor={MyTheme.grey100}
              secureTextEntry={showConfirmPassword ? false : true}
            />
            {!showConfirmPassword ? (
              <Pressable
                style={{paddingHorizontal: '5%'}}
                onPress={() => setShowConfirmPassword(true)}>
                <Feather name="eye" size={20} color={MyTheme.grey100} />
              </Pressable>
            ) : (
              <Pressable
                style={{paddingHorizontal: '5%'}}
                onPress={() => setShowConfirmPassword(false)}>
                <Feather name="eye-off" size={20} color={MyTheme.grey100} />
              </Pressable>
            )}
          </View>
        </View>
        <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Occupation*</Text>
          <View style={styles.input}>
            <DropdownComponent
              setCity={setOccupation}
              allCities={allOccupations}
              signup={true}
              placeholder={'Occupation'}
            />
          </View>
          {/* <TextInput
            style={globalInputsStyles.input}
            onChangeText={setOccupation}
            value={occupation}
            placeholder="Your Occupation Name"
            placeholderTextColor={MyTheme.grey100}
          /> */}
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
          <Text style={globalInputsStyles.globalLabel}>City*</Text>
          <View style={styles.input}>
            <DropdownComponent
              setCity={setCity}
              allCities={allCities}
              signup={true}
              placeholder={'City'}
            />
          </View>
          {/* <TextInput
            style={globalInputsStyles.input}
            onChangeText={setCountryAddress}
            value={countryAddress}
            placeholder="Country address"
            placeholderTextColor={MyTheme.grey100}
          /> */}
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
        {/* <View style={globalInputsStyles.globalInputs}>
          <Text style={globalInputsStyles.globalLabel}>Region Capital*</Text>
          <View style={styles.input}>
            <DropdownComponent
              setCity={setCity}
              allCities={allCities}
              signup={true}
              placeholder={'Region Capital'}
            />
          </View>
          <TextInput
            style={globalInputsStyles.input}
            onChangeText={setRegionCapital}
            value={regionCapital}
            placeholder=" Capital name "
            placeholderTextColor={MyTheme.grey100}
          />
        </View> */}
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
