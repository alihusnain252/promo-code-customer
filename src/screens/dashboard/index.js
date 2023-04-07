import {View, Text, TextInput, Image, Pressable} from 'react-native';
import React, { useEffect, useState } from 'react';
import {styles} from './styles';
import {
  Ads,
  BottomBar,
  FeaturedAds,
  FeaturedVendors,
  TopHeader,
} from '@components';
import {MyTheme} from '@utils';
import { useSelector } from 'react-redux';
import { token } from '@redux/tokenSlice';
import { GetRequest } from '../../api/apiCall';

export const Dashboard = ({navigation}) => {

  const [loading, setLoading] = useState(false);
  const [allPromotions, setAllPromotions] = useState([]);
  const [featured_vendors, setFeatured_vendors] = useState([]);
  const [promotions, setPromotions] = useState([]);
  
  const userToken = useSelector(token);

  const getAds = () => {
    setLoading(true);
    GetRequest(userToken.token, 'api/customer/promotions').then(res => {
      // console.log('dashboard featured api response :', res.data.data.promotions.data);
      if (res.data.success === true) {
        setAllPromotions(res.data.data.promotions.data);
        setLoading(false);
      } else {
        Alert.alert(res.data.message);
        setLoading(false);
      }
    });
  };


  const getFeaturedVendors = () => {
    setLoading(true);
    GetRequest(userToken.token, 'api/customer/featured-vendors').then(res => {
      console.log('featured api response', res.data);
      if (res.data.success === true) {
        setLoading(false);
        setFeatured_vendors(res.data.data.featured_vendors);
        console.log(
          'dashboard featured vendors api response',
          res.data.data.featured_vendors,
        );
      } else {
        setLoading(false);
      }
    });
  };


  const getFeaturedAds = () => {
    setLoading(true);
    GetRequest(userToken.token, 'api/customer/featured-promotions').then(
      res => {
        console.log('dashboard featured api response', res.data.data.featured_promotions);
        if (res.data.success === true) {
          setPromotions(res.data.data.featured_promotions);
          setLoading(false);
        } else {
          Alert.alert(res.data.message);
          setLoading(false);
        }
      },
    );
  };
  
  
  
  
  useEffect(() => {
    getFeaturedAds();
    getFeaturedVendors();
    getAds();
  }, []);




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
        <FeaturedVendors featured_vendors={featured_vendors} loading={loading} />
      </View>
      <View style={styles.ads}>
        <Text style={styles.heading}>Featured Ads⚡️</Text>
        <FeaturedAds promotions={promotions} loading={loading} />
      </View>
      <View style={styles.discount}>
        <Text style={styles.heading}>Discounts for you⚡️</Text>
        <Ads allPromotions={allPromotions} loading={loading}  />
      </View>
      <BottomBar />
    </View>
  );
};
