import {View, Text, TextInput, Image, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Ads, BottomBar, FeaturedAds, FeaturedVendors, TopHeader} from '@components';
import {MyTheme} from '@utils';

export const Dashboard = () => {
  return (
    <View style={styles.dashboardContainer}>
      <TopHeader />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search (Vendor, Offers)"
          placeholderTextColor={MyTheme.EerieBlack}
        />
        <Pressable style={styles.searchPress}>
          <Image
            source={require('../../assets/icons/search.png')}
            style={styles.searchImage}
          />
        </Pressable>
      </View>
      <View style={styles.vendors}>
        <FeaturedVendors />
      </View>
      <View style={styles.ads}>
        <FeaturedAds />
      </View>
      <View style={styles.discount}>
        <Ads />
      </View>
      <BottomBar />
    </View>
  );
};
