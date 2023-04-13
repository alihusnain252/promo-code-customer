import {View, Text, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Ads, ArrowHeader, FeaturedAds, FeaturedVendors} from '@components';
import {GetRequest} from '../../api/apiCall';
import {useSelector} from 'react-redux';
import {token} from '@redux/tokenSlice';
import {customerUris} from '@utils';

export const Favorite = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [favoriteVendors, setFavoriteVendors] = useState([]);
  const [favoritePromotions, setFavoritePromotions] = useState([]);

  const userToken = useSelector(token);

  const getFavorites = () => {
    setLoading(true);
    GetRequest(userToken.token, customerUris.favoriteList).then(res => {
      if (res.status) {
        // console.log('is favorite vendors :', res.data.data.favourite_vendors);
        setFavoritePromotions(res.data.data.favourite_promotions.data);
        setFavoriteVendors(res.data.data.favourite_vendors);
        setLoading(false);
      } else {
        setLoading(false);
        console.log('is favorite :', res);
      }
    });
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <View style={styles.favoriteContainer}>
      <ArrowHeader heading="Favorite" />
      <View style={styles.favoriteVendor}>
        <Text style={styles.favoriteVendorText}>Favorite Vendors</Text>
        {favoriteVendors.length === 0? <Text style={styles.noFavoriteVendorText}>No favorite vendor available </Text> :null}
        <FeaturedVendors featured_vendors={favoriteVendors} loading={loading} />
      </View>
      <View style={styles.favoriteDiscount}>
        <Text style={styles.favoriteDiscountText}>Favorite Discount</Text>
        {favoritePromotions.length === 0? <Text style={styles.noFavoriteVendorText}>No favorite Promotions available </Text> :null}
        <Ads allPromotions={favoritePromotions} loading={loading} />
      </View>
    </View>
  );
};
