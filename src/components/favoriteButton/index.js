import {Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import image from '../../assets/images/image8.png';
import {useSelector} from 'react-redux';
import {token} from '@redux/tokenSlice';
import {GetRequest, PostRequestWithToken} from '../../api/apiCall';
import {MyTheme, customerUris} from '@utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {userData} from '@redux/favouriteDataSlice';

export const FavoriteButton = ({onPress, data, isFavorite,vendor}) => {
  const [favorite, setFavorite] = useState(false);
  const favList = useSelector(userData);
  const navigation = useNavigation();
  const userToken = useSelector(token);

  useEffect(() => {
    if (favList && favList?.data?.favourite_promotions?.data?.length) {
      const fList = favList?.data?.favourite_promotions?.data;
      const vFList = favList?.data?.favourite_vendors;
      const fFav = vendor? vFList.find(item => item.id === data.id): fList.find(item => item.id === data.id);
      if (fFav) {
        setFavorite(true);
      } else {
        setFavorite(false);
      }
    } else {
      setFavorite(isFavorite);
    }
  }, [favList, isFavorite, data]);

  const addTOFavorite = promo => {
    const data = {
      promotion_id: promo.id,
    };
    const vendorData = {
      vendor_id: promo.id,
    };

    PostRequestWithToken(
      userToken.token,
      vendor?vendorData: data,
      vendor?customerUris.addVendorToFavorite: customerUris.addPromotionToFavorite,
    ).then(res => {
      console.log('is favorite ada :', res);
      if (res.data.success) {
        setFavorite(true);
      } else {
        console.log(res.data.message);
      }
    });
  };
  const removeFromFavorite = (promo) => {
    const data = {
      promotion_id: promo.id,
    };
    const vendorData = {
      vendor_id: promo.id,
    };

    PostRequestWithToken(
      userToken.token,
      vendor?vendorData: data,
      vendor?customerUris.removeVendorFromFavorite: customerUris.removePromotionFromFavorite,
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
          : addTOFavorite(data)
      }
      style={styles.heartContainer}>
      <AntDesign
        name="heart"
        size={15}
        color={favorite ? '#E65C89' : MyTheme.grey100}
      />
    </Pressable>
  );
};
