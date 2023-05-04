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
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {token} from '@redux/tokenSlice';
import {GetRequest} from '../../api/apiCall';
import {MyTheme, customerUris} from '@utils';
import {PostRequestWithToken} from '../../api/apiCall';
import {userData} from '@redux/favouriteDataSlice';

export const FeaturedAds = ({loading, promotions}) => {
  const favoriteData = useSelector(userData);

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
        {promotions?.map((promo, index) => {
           const ids = favoriteData.data.favourite_promotions.data.filter(item => item.id === promo.id?promo.id:null)
           console.log("id :", ids);
          return <FeaturedAd key={index} promotion={promo} />;
        })}
      </ScrollView>
    </View>
  );
};
const FeaturedAd = ({promotion}) => {
  console.log("promo id : " , promotion.id);
  const navigation = useNavigation();
  const favoriteData = useSelector(userData);
  // const ids = favoriteData.data.favourite_promotions.data.map(item => item.id === promotion.id?promotion.id:"")
  // console.log("id :", ids);

  
  const [isFavorite, setIsFavorite] = useState(true);

  const userToken = useSelector(token);

  const addTOFavorite = promotion => {
    const data = {
      promotion_id: promotion.id,
    };

    PostRequestWithToken(
      userToken.token,
      data,
      customerUris.addPromotionToFavorite,
    ).then(res => {
      if (res.data.success) {
        console.log('is favorite ada :', res);
        setIsFavorite(true);
      }
      console.log('is favorite add :', res);
    });
  };
  const removeFromFavorite = promotion => {
    const data = {
      promotion_id: promotion.id,
    };

    PostRequestWithToken(
      userToken.token,
      data,
      customerUris.removePromotionFromFavorite,
    ).then(res => {
      if (res.data.success) {
        console.log('is favorite add :', res);
        setIsFavorite(false);
      } else {
        console.log('is favorite add :', res);
      }
    });
  };

  return (
    <View style={styles.cardContainer}>
      <Pressable
        onPress={() =>
          navigation.navigate('PromoDetails', {
            promoDetails: promotion,
          })
        }>
        <View style={styles.cardImageContainer}>
          <View style={styles.imageView}>
            <Image source={{uri: promotion.image}} style={styles.cardImage} />
          </View>
          <View style={styles.cardDetails}>
            <Text style={styles.imageTitle}>{promotion.company_name}</Text>
            {/* <Text style={styles.discount}>5% Cashback</Text> */}
          </View>
          <Pressable
            style={styles.heartContainer}
            onPress={() =>
              userToken.token === ''
                ? navigation.navigate('Login')
                : isFavorite
                ? removeFromFavorite(promotion)
                : addTOFavorite(promotion)
            }>
            <AntDesign
              name="heart"
              size={15}
              color={isFavorite ? '#E65C89' : MyTheme.grey100}
            />
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
};
