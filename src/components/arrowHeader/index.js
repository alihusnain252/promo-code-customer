import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export const ArrowHeader = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={20} color="#000" />
      </Pressable>
      <Text style={styles.headerText}>{props.heading}</Text>
    </View>
  );
};
