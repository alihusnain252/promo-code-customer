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
import {ArrowHeader, FavoriteButton} from '@components';
import {useNavigation} from '@react-navigation/native';

export const AllVendors = ({navigation}) => {
  const userToken = useSelector(token);
  const [loading, setLoading] = useState(false);
  const [allVendors, setAllVendors] = useState([]);

  const getAllVendors = () => {
    setLoading(true);
    GetRequest(customerUris.allVendors).then(res => {
      console.log('is favorite ada :', res.data.data.vendors);
      if (res.status) {
        setAllVendors(res.data.data.vendors);
        setLoading(false);
      } else {
        setLoading(false);
        console.log(res.data.message);
      }
    });
  };

  useEffect(() => {
    getAllVendors();
  }, []);

  return (
    <View style={styles.vendorsContainer}>
      <ArrowHeader heading="All Vendors" />
      <View
        style={loading === false ? {display: 'none'} : {marginVertical: 10}}>
        <ActivityIndicator size={36} color={MyTheme.yellow} />
      </View>
      <ScrollView style={styles.scroll}>
        {allVendors?.map((vendor, index) => {
          return <VendorCard key={index} vendor={vendor} />;
        })}
      </ScrollView>
    </View>
  );
};

export const VendorCard = ({vendor}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.cardContainer}>
      <Pressable
        onPress={() =>
          navigation.navigate('VendorDetails', {vendorDetails: vendor})
        }>
        <View style={styles.cardTopView}>
          <Image
            source={vendor.profile_pic ? {uri: vendor.profile_pic} : image}
            style={styles.cardImage}
          />
          <View style={styles.vendorDetails}>
            <Text style={styles.vendorName}>
              {vendor ? vendor.name : 'vendor name'}
            </Text>

            <Text style={styles.categoryName}>
              {vendor ? vendor.category_name : 'category name'}
            </Text>

            <Text style={styles.address}>
              Address :
              <Text style={styles.addressText}>
                {vendor ? vendor.address : 'address'}
              </Text>
            </Text>

            <Text style={styles.description}>
              Description :
              <Text style={styles.descriptionText}>
                {vendor ? vendor.short_description : 'short description'}
              </Text>
            </Text>
          </View>
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
        <FavoriteButton
          isFavorite={vendor.is_favourite}
          data={vendor}
          vendor={true}
        />
      </Pressable>
    </View>
  );
};
