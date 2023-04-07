import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Ads, ArrowHeader, FeaturedAds} from '@components';

export const Favorite = ({navigation}) => {
  return (
    <View style={styles.favoriteContainer}>
      <ArrowHeader heading="Favorite" />
      <View style={styles.favoriteVendor}>
        <Text style={styles.favoriteVendorText}>Favorite Vendors</Text>
        <FeaturedAds />
      </View>
      <View style={styles.favoriteDiscount}>
        <Text style={styles.favoriteDiscountText}>Favorite Discount</Text>
        <Ads />
      </View>
    </View>
  );
};
