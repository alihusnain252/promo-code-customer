import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

export const BottomBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.bottomBarContainer}>
      <Pressable
        style={styles.iconView}
        onPress={() => navigation.navigate('Dashboard')}>
        <Image
          source={require('../../assets/icons/home.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>Home</Text>
      </Pressable>
      <Pressable
        style={styles.iconView}
        onPress={() => navigation.navigate('Favorite')}>
        <Entypo name="grid" size={21.67} color="#fff" />
        <Text style={styles.iconText}>Categories</Text>
      </Pressable>
      <Pressable
        style={styles.iconView}
        onPress={() => navigation.navigate('Favorite')}>
        <Image
          source={require('../../assets/icons/favorites.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>Favorites</Text>
      </Pressable>
      <Pressable
        style={styles.iconView}
        onPress={() => navigation.navigate('AccountScreen')}>
        <MaterialIcons name="person" size={21.67} color="#fff" />
        <Text style={styles.iconText}>Account</Text>
      </Pressable>
    </View>
  );
};
