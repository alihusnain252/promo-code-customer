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
import {GetRequest} from '../../api/apiCall';
import {useSelector} from 'react-redux';
import {token} from '@redux/tokenSlice';
import {MyTheme} from '@utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export const FeaturedVendors = ({loading, featured_vendors}) => {


  const navigation = useNavigation();



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
        {featured_vendors?.map(vendor => {
          return <Vendors vendor={vendor} navigation={navigation}/>;
        })}
      </ScrollView>
    </View>
  );
};

const Vendors = ({vendor , navigation}) => {
  return (
    <Pressable onPress={()=>navigation.navigate("VendorDetails",{vendorDetails:vendor})}>
      <View style={styles.cardContainer}>
        <View style={styles.cardImageContainer}>
          <Image source={{uri: vendor.profile_pic}} style={styles.cardImage} />
        </View>
        <Text style={styles.imageTitle}>{vendor.name}</Text>
      </View>
      <Pressable
            style={styles.heartContainer}
            // onPress={() => addTOFavorite(promotion)}
            >
            <AntDesign
              name="heart"
              size={15}
              color={
                 MyTheme.grey100
              }
            />
          </Pressable>
    </Pressable>
  );
};
