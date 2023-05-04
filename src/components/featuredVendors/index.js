import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {GetRequest, PostRequestWithToken} from '../../api/apiCall';
import {useSelector} from 'react-redux';
import {token} from '@redux/tokenSlice';
import {MyTheme, customerUris} from '@utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {FavoriteButton} from '../favoriteButton';

export const FeaturedVendors = ({loading, featured_vendors}) => {
  return (
    <View style={styles.featuredVendorsContainer}>
      <View
        style={
          loading === false
            ? {display: 'none'}
            : {position: 'absolute', top: 10, left: 150, zIndex: 1}
        }>
        <ActivityIndicator size={36} color={MyTheme.yellow} />
      </View>
      <ScrollView
        style={styles.scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {featured_vendors?.map((vendor, index) => {
          return <Vendors key={index} vendor={vendor} />;
        })}
      </ScrollView>
    </View>
  );
};

export const Vendors = ({vendor}) => {
  const navigation = useNavigation();
  // console.log("one vendor :", vendor);

  const userToken = useSelector(token);
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('VendorDetails', {vendorDetails: vendor})
      }>
      <View style={styles.mainContainer}>
        <View style={styles.cardImageContainer}>
          <Image source={{uri: vendor.profile_pic}} style={styles.cardImage} />
        </View>

        <View
          style={{
            height: '40%',
            padding: '2%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.imageTitle}>{vendor.name}</Text>
        </View>

        {/* <Pressable
          style={styles.heartContainer}
          onPress={() =>
            userToken.token === ''
              ? navigation.navigate('Login')
              : isFavorite
              ? removeFromFavorite(vendor)
              : addTOFavorite(vendor)
          }>
          <AntDesign
            name="heart"
            size={15}
            color={isFavorite ? '#E65C89' : MyTheme.grey100}
          />
        </Pressable> */}
        <FavoriteButton isFavorite={vendor.is_favourite} data={vendor} vendor={true} />
      </View>
    </Pressable>
  );
};
