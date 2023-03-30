import {View, Text, Pressable} from 'react-native';
import React from 'react';
import { styles } from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Ads, FeaturedAds } from '@components';

export const Favorite = ({navigation}) => {
  return (
    <View style={styles.favoriteContainer}>
      <View style={styles.favoriteHeader}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={25} color="#000" />
        </Pressable>
        <Text style={styles.favoriteHeaderText}>Favorite</Text>
      </View>
      <View style={styles.favoriteVendor}>
        <Text style={styles.favoriteVendorText}>Favorite Vendors</Text>
        <FeaturedAds />
      </View>
      <View style={styles.favoriteDiscount}>
        <Text style={styles.favoriteDiscountText}>FavoriteDiscount</Text>
        <Ads />
      </View>
    </View>
  );
};
