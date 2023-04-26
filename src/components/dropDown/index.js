import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {styles} from './styles';
import {MyTheme} from '@utils';

const data = [
  {label: 'Accra', value: 'Accra'},
  {label: 'Kumasi', value: 'Kumasi'},
  {label: 'Sekondi', value: 'Sekondi'},
  {label: 'Obuase', value: 'Obuase'},
  {label: 'Tema', value: 'Tema'},
  {label: 'Cape Coast', value: 'Cape Coast'},
  {label: 'Koforidua', value: 'Koforidua'},
  {label: 'Ho', value: 'Ho'},
  {label: 'Wa', value: 'Wa'},
  {label: 'Bawku', value: 'Bawku'},
  {label: 'Sunyani', value: 'Sunyani'},
  {label: 'Bolgatanga', value: 'Bolgatanga'},
  {label: 'Aflao', value: 'Aflao'},
  {label: 'Nkawkaw', value: 'Nkawkaw'},
  {label: 'Tamale', value: 'Tamale'},
  {label: 'Hohoe', value: 'Hohoe'},
  {label: 'Winneba', value: 'Winneba'},
  {label: 'Berekum', value: 'Berekum'},
  {label: 'Techiman', value: 'Techiman'},
  {label: 'Sefwi Wiawso', value: 'Sefwi Wiawso'},
  {label: 'Goaso', value: 'Goaso'},
  {label: 'Dambai', value: 'Dambai'},
  {label: 'Nalerigu', value: 'Nalerigu'},
  {label: 'Damongo', value: 'Damongo'},
];

export const DropdownComponent = ({
  setCity,
  search,
  allCities,
  signup,
  placeholder,
}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  let citiesData = allCities.map(city => ({
    label: `${city}`,
    value: `${city}`,
  }));

  return (
    <View
      style={[styles.container, signup ? {alignItems: 'flex-start'} : null]}>
      <Dropdown
        style={[
          styles.dropdown,
          isFocus && {borderColor: 'blue'},
          signup ? {borderColor: MyTheme.background} : null,
        ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        itemTextStyle={styles.label}
        data={citiesData ? citiesData : data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? placeholder : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => {
          search ? search() : null, setIsFocus(false);
        }}
        onChange={item => {
          setValue(item.value);
          setCity(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};
