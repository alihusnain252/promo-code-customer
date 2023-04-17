import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { styles } from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { MyTheme } from '@utils';

export const ArrowHeader = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.goBack()}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center', padding:'3%',}}>
          <AntDesign name="arrowleft" size={20} color={MyTheme.accent} />
        </View>
      </Pressable>
      <Text style={styles.headerText}>{props.heading}</Text>
    </View>
  );
};
