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
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {token} from '@redux/tokenSlice';
import {GetRequest} from '../../api/apiCall';
import {MyTheme, customerUris} from '@utils';
import {PostRequestWithToken} from '../../api/apiCall';

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
          return <FeaturedAd promotion={promo} />;
        })}
      </ScrollView>
    </View>
  );
};
const FeaturedAd = ({promotion}) => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(promotion.is_favourite);

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
        // console.log('is favorite ada :', res);
        setIsFavorite(true);
      }
      console.log('is favorite ada :', res);
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
        console.log('is favorite ada :', res);
        setIsFavorite(false);
      } else {
        console.log('is favorite ada :', res);
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
              isFavorite
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
