import {
  View,
  Text,
  ScrollView,
  Image,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import image from '../../assets/images/image8.png';
import { useSelector } from 'react-redux';
import { token } from '@redux/tokenSlice';
import { GetRequest, PostRequestWithToken } from '../../api/apiCall';
import { MyTheme, customerUris } from '@utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { userData } from '@redux/favouriteDataSlice';

export const Ads = ({ loading, allPromotions }) => {
  return (
    <View style={styles.adsContainer}>
      <View
        style={
          loading === false
            ? { display: 'none' }
            : { position: 'absolute', top: 10, left: 150, zIndex: 1 }
        }>
        <ActivityIndicator size={36} color={MyTheme.yellow} />
      </View>
      <ScrollView style={styles.scroll}>
        {allPromotions?.map((promo, index) => {
          // console.log('promo.image', promo.image);
          return <AdCard key={index} promo={promo} />;
        })}
      </ScrollView>
    </View>
  );
};

export const AdCard = ({ promo }) => {
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
      // console.log('is favorite ada :', res);
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
      // console.log('is remove from favorite :', res);
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
            source={promo ? { uri: promo.image } : image}
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
        {/* <Pressable
          style={styles.heartContainer}
          onPress={() =>
            userToken.token === ''
              ? navigation.navigate('Login')
              : isFavorite
                ? removeFromFavorite(promo)
                : addTOFavorite(promo)
          }>
          <AntDesign
            name="heart"
            size={15}
            color={isFavorite ? '#E65C89' : MyTheme.grey100}
          />
        </Pressable> */}

        <FavoriteButton
          isFavorite={promo.is_favourite} data={promo}
          onPress={() =>
            userToken.token === ''
              ? navigation.navigate('Login')
              : isFavorite
                ? removeFromFavorite(promo)
                : addTOFavorite(promo)}
        />
      </Pressable>
    </View>
  );
};



const FavoriteButton = ({ onPress, data, isFavorite }) => {

  const [favorite, setFavorite] = useState(false);
  const favList = useSelector(userData);
  const navigation = useNavigation()
  const userToken = useSelector(token);



  useEffect(() => {
    if (favList && favList?.data?.favourite_promotions?.data?.length) {
      const fList = favList?.data?.favourite_promotions?.data
      const fFav = fList.find(item => item.id === data.id)
      if (fFav) {
        setFavorite(true)
      } else {
        setFavorite(false)
      }
    } else {
      setFavorite(isFavorite)
    }
  }, [favList, isFavorite, data])




  const addTOFavorite = promo => {
    const data = {
      promotion_id: promo.id,
    };

    PostRequestWithToken(
      userToken.token,
      data,
      customerUris.addPromotionToFavorite,
    ).then(res => {
      // console.log('is favorite ada :', res);
      if (res.data.success) {
        setFavorite(true);
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
      // console.log('is remove from favorite :', res);
      if (res.data.success) {
        setFavorite(false);
      } else {
        console.log(res.data.message);
      }
    });
  };

  return (
    <Pressable
      onPress={() =>
        userToken.token === ''
          ? navigation.navigate('Login')
          : favorite
            ? removeFromFavorite(data)
            : addTOFavorite(data)}
      style={styles.heartContainer}
    >
      <AntDesign
        name="heart"
        size={15}
        color={favorite ? '#E65C89' : MyTheme.grey100}
      />
    </Pressable>
  )
}