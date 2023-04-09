import {
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import image from '../../assets/images/image8.png';
import {useSelector} from 'react-redux';
import {token} from '@redux/tokenSlice';
import {GetRequest, PostRequestWithToken} from '../../api/apiCall';
import {MyTheme, customerUris} from '@utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export const Ads = ({loading, allPromotions}) => {
  return (
    <View style={styles.adsContainer}>
      <View
        style={
          loading === false
            ? {display: 'none'}
            : {position: 'absolute', top: 10, left: 150, zIndex: 1}
        }>
        <ActivityIndicator size={36} color={MyTheme.yellow} />
      </View>
      <ScrollView style={styles.scroll}>
        {allPromotions?.map(promo => {
          return <AdCard promo={promo} />;
        })}
        <View style={{width: '100%', height: 200}}></View>
      </ScrollView>
    </View>
  );
};

export const AdCard = ({promo}) => {
  const navigation = useNavigation();

  const [isFavorite, setIsFavorite] = useState(promo.is_favourite);

  const userToken = useSelector(token);

  const addTOFavorite = promo => {
    const data = {
      promotion_id: promo.id,
    };

    PostRequestWithToken(
      userToken.token,
      data,
      customerUris.addPromotionToFavorite,
    ).then(res => {
      console.log('is favorite ada :', res);
      if (res.data.success) {
        setIsFavorite(true);
      } else {
        console.log(res.data.message);
      }
    });
  };
  const removeFromFavorite = promo => {
    const data = {
      promotion_id: promo.id,
    };

    PostRequestWithToken(
      userToken.token,
      data,
      customerUris.removePromotionFromFavorite,
    ).then(res => {
      console.log('is remove from favorite :', res);
      if (res.data.success) {
        setIsFavorite(false);
      } else {
        console.log(res.data.message);
      }
    });
  };

  return (
    <View style={styles.cardContainer}>
      <Pressable
        onPress={() =>
          navigation.navigate('PromoDetails', {
            promoDetails: promo,
          })
        }>
        <View style={styles.cardTopView}>
          <Image
            source={promo ? {uri: promo.image} : image}
            style={styles.cardImage}
          />
          <View style={styles.adDetails}>
            <Text style={styles.originalPrice}>
              {promo ? promo.original_price : 150}$
            </Text>
            <View style={styles.line}></View>
            <Text style={styles.discountPrice}>
              {promo ? promo.discounted_price : 70}${' '}
              <Text style={styles.off}>OFF</Text>
            </Text>
            <Text style={styles.adTitle}>
              {promo ? promo.promotion_details : 'Philips Iron - Promo'}{' '}
            </Text>
            <Text style={styles.expiry}>
              Active - Promo Expiring in {promo ? promo.promotion_duration : 15}{' '}
              hours{' '}
            </Text>
          </View>
        </View>
        <View style={styles.bottomView}>
          <View style={styles.bottomLeft}>
            <Text style={styles.companyName}>
              {promo ? promo.company_name : 'Promo Company Name here'}
            </Text>
            <Text style={styles.categoryName}>
              {promo ? promo.category_name : 'Category Name'}
            </Text>
          </View>
          <View style={styles.bottomRight}>
            <Text style={styles.availableTill}>
              Available Till: {promo ? promo.expiry_date : '27,Mar'}{' '}
            </Text>
          </View>
        </View>
        <Pressable
          style={styles.heartContainer}
          onPress={() =>
            isFavorite ? removeFromFavorite(promo) : addTOFavorite(promo)
          }>
          <AntDesign
            name="heart"
            size={15}
            color={isFavorite ? '#f70606' : MyTheme.grey100}
          />
        </Pressable>
      </Pressable>
    </View>
  );
};
