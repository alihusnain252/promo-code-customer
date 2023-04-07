import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import image3 from '../../assets/images/image3.png';
import image6 from '../../assets/images/image6.png';
import image7 from '../../assets/images/image7.png';
import heart from '../../assets/images/heart.png';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {token} from '@redux/tokenSlice';
import {GetRequest} from '../../api/apiCall';
import {MyTheme} from '@utils';

export const FeaturedAds = ({loading, promotions}) => {
  return (
    <View style={styles.featuredAdsContainer}>
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
        {promotions?.map(promo => {
          return (
            <FeaturedAd
              image={promo.image}
              title={promo.company_name}
              promoDetails={promo}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
const FeaturedAd = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.cardContainer}>
      <Pressable
        onPress={() =>
          navigation.navigate('PromoDetails', {
            promoDetails: props.promoDetails,
          })
        }>
        <View style={styles.cardImageContainer}>
          <View style={styles.imageView}>
            <Image source={{uri: props.image}} style={styles.cardImage} />
          </View>
          <View style={styles.cardDetails}>
            <Text style={styles.imageTitle}>{props.title}</Text>
            <Text style={styles.discount}>5% Cashback</Text>
          </View>
          <View style={styles.heartContainer}>
            <Image source={heart} style={styles.heartImg} />
          </View>
        </View>
      </Pressable>
    </View>
  );
};
