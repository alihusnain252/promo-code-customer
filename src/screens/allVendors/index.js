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
import {GetRequest} from '../../api/apiCall';
import {MyTheme, customerUris} from '@utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ArrowHeader} from '@components';
import {useNavigation} from '@react-navigation/native';

export const AllVendors = ({navigation}) => {
  const userToken = useSelector(token);
  const [loading, setLoading] = useState(false);
  const [allVendors, setAllVendors] = useState([]);

  const getAllVendors = () => {
    GetRequest(userToken.token, customerUris.allVendors).then(res => {
      console.log('is favorite ada :', res);
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
        style={
          loading === false
            ? {display: 'none'}
            : {position: 'absolute', top: 10, left: 150, zIndex: 1}
        }>
        <ActivityIndicator size={36} color={MyTheme.yellow} />
      </View>
      <ScrollView style={styles.scroll}>
        {allVendors?.map(vendor => {
          return <VendorCard vendor={vendor} />;
        })}
        <View style={{width: '100%', height: 200}}></View>
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
            source={vendor ? {uri: vendor.profile_pic} : image}
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
        <Pressable
          style={styles.heartContainer}
          // onPress={() => addTOFavorite(promotion)}
        >
          <AntDesign name="heart" size={15} color={MyTheme.grey100} />
        </Pressable>
      </Pressable>
    </View>
  );
};
