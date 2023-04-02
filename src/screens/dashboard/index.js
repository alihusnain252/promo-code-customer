import {View, Text, TextInput, Image, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {
  Ads,
  BottomBar,
  FeaturedAds,
  FeaturedVendors,
  TopHeader,
} from '@components';
import {MyTheme} from '@utils';

export const Dashboard = ({navigation}) => {
  return (
    <View style={styles.dashboardContainer}>
      <TopHeader />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search (Vendor, Offers)"
          placeholderTextColor={MyTheme.EerieBlack}
        />
        <Pressable
          style={styles.searchPress}
          onPress={() => navigation.navigate('SearchVendor')}>
          <Image
            source={require('../../assets/icons/search.png')}
            style={styles.searchImage}
          />
        </Pressable>
      </View>
      <View style={styles.vendors}>
        <Text style={styles.heading}>Featured vendors</Text>
        <FeaturedVendors />
      </View>
      <View style={styles.ads}>
        <Text style={styles.heading}>Featured Ads⚡️</Text>
        <FeaturedAds />
      </View>
      <View style={styles.discount}>
        <Text style={styles.heading}>Discounts for you⚡️</Text>
        <Ads />
      </View>
      <BottomBar />
    </View>
  );
};
