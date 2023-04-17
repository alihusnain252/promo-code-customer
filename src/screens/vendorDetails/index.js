import {View, Text, TextInput, Image, Pressable, ActivityIndicator} from 'react-native';
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

        <View style={styles.vendorDetailsView}>
          <VendorDetailItem title={'Name'} value={vendorDetails.name} />
          <VendorDetailItem
            title={'Phone Number '}
            value={vendorDetails.phone_number}
          />
          <VendorDetailItem title={'Email'} value={vendorDetails.email} />
          <VendorDetailItem title={'Address'} value={vendorDetails.address} />
        </View>
        <View style={loading === false ? {display: 'none'} : {marginTop: 20}}>
          <ActivityIndicator size={36} color={MyTheme.primary} />
        </View>
      <ScrollView style={styles.vendorDetailsScrollView}>

        <View style={vendorPromotions.length === 0 ?{display:"none"}: styles.discount}>
          <View style={styles.discountHeadingContainer}>
          <Text style={styles.discountHeading}>Discounts for you⚡️</Text>
         
          </View>
          {
            vendorPromotions.map((vendorAds)=>{
              return <AdCard promo={vendorAds} />
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
