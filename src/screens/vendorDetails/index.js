import { View, Text, TextInput, Image, Pressable } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { AdCard, ArrowHeader } from '@components';
import { MyTheme } from '@utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import { VendorCard } from '../allVendors';

export const VendorDetails = ({ route, navigation }) => {
  const { vendorDetails } = route.params;
  console.log('promoDetails params : ', vendorDetails);

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
          <VendorDetailItem title={'Phone Number '} value={vendorDetails.phone_number} />
          <VendorDetailItem title={'Email'} value={vendorDetails.email} />
          <VendorDetailItem title={'Address'} value={vendorDetails.address} />
        </View>

        <View style={styles.discount}>
          <Text style={styles.discountHeading}>Discounts for you⚡️</Text>
          <VendorCard vendor={vendorDetails} />
        </View>
      </ScrollView>
    </View>
  );
};



const VendorDetailItem = ({ title, value }) => {
  return (
    <View style={styles.vendorNameVIew}>
      <Text style={styles.vendorTextBold}>{title}:</Text>
      <Text style={styles.vendorText}>{value}</Text>
    </View>
  )
}