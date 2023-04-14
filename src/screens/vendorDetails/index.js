import {View, Text, TextInput, Image, Pressable} from 'react-native';
import React, { useEffect, useState } from 'react';
import {styles} from './styles';
import {AdCard, ArrowHeader} from '@components';
import {ScrollView} from 'react-native-gesture-handler';
// import {VendorCard} from '../allVendors';
import { useSelector } from 'react-redux';
import { token } from '@redux/tokenSlice';
import { MyTheme, customerUris } from '@utils';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { GetRequest } from '../../api/apiCall';

import AntDesign from 'react-native-vector-icons/AntDesign';

export const VendorDetails = ({route, navigation}) => {
  const {vendorDetails} = route.params;
  console.log("vendor Id : ",vendorDetails.id);

  const userToken = useSelector(token);
  const [loading, setLoading] = useState(false)
  const [vendorPromotions, setVendorPromotions] = useState([])

  const getVendorPromotions=()=>{
    setLoading(true);
    GetRequest(
      userToken.token,
      customerUris.PromotionByVendorId + `${vendorDetails.id?vendorDetails.id:""}`,
    ).then(res => {
      if (res.data.success === true) {
        console.log(res.data.data.promotions.data);
        setVendorPromotions(res.data.data.promotions.data)
        setLoading(false);
      } else {
        Alert.alert(res.data.message);
        setLoading(false);
      }
    });
  }

useEffect(() => {
  getVendorPromotions()
}, [])



  return (
    <View style={styles.vendorDetailsContainer}>
      <ArrowHeader heading="Vendor Details" />

      <View style={styles.imageView}>
        <Image
          source={{
            uri: vendorDetails.profile_pic ? vendorDetails.profile_pic : '',
          }}
          style={styles.cardImage}
        />
        <Text style={styles.vendorCategory}>{vendorDetails.category_name}</Text>
      </View>

      <ScrollView>
        <View style={styles.vendorDetailsView}>
          <VendorDetailItem title={'Name'} value={vendorDetails.name} />
          <VendorDetailItem
            title={'Phone Number '}
            value={vendorDetails.phone_number}
          />
          <VendorDetailItem title={'Email'} value={vendorDetails.email} />
          <VendorDetailItem title={'Address'} value={vendorDetails.address} />
        </View>

        <View style={vendorPromotions.length === 0 ?{display:"none"}: styles.discount}>
          <Text style={styles.discountHeading}>Discounts for you⚡️</Text>
          {
            vendorPromotions.map((vendorAds)=>{
              return <VendorCard vendor={vendorAds} />
            })
          }
        </View>
      </ScrollView>
    </View>
  );
};

const VendorDetailItem = ({title, value}) => {
  return (
    <View style={styles.vendorNameVIew}>
      <Text style={styles.vendorTextBold}>{title}:</Text>
      <Text style={styles.vendorText}>{value}</Text>
    </View>
  );
};
const VendorCard = ({vendor}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.cardContainer}>
      <Pressable
        onPress={() =>
          navigation.navigate('VendorDetails', {vendorDetails: vendor})
        }>
        <View style={styles.cardTopView}>
          <Image
            source={vendor.image ? {uri: vendor.image} : ""}
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
