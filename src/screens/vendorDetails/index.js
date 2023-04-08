import {View, Text, TextInput, Image, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {AdCard, ArrowHeader} from '@components';
import {MyTheme} from '@utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';

export const VendorDetails = ({route, navigation}) => {
  const {vendorDetails} = route.params;
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
        <View style={styles.vendorNameVIew}>
          <Text style={styles.vendorTextBold}> Name :</Text>
          <Text style={styles.vendorText}>{vendorDetails.name}</Text>
        </View>
        <View style={styles.vendorNameVIew}>
          <Text style={styles.vendorTextBold}> Phone Number :</Text>
          <Text style={styles.vendorText}>{vendorDetails.phone_number}</Text>
        </View>
        <View style={styles.vendorNameVIew}>
          <Text style={styles.vendorTextBold}> Email :</Text>
          <Text style={styles.vendorText}>{vendorDetails.email}</Text>
        </View>
        <View style={styles.vendorNameVIew}>
          <Text style={styles.vendorTextBold}> Address :</Text>
          <Text style={styles.vendorText}>{vendorDetails.address}</Text>
        </View>
      </View>

      <View style={styles.discount}>
        <Text style={styles.heading}>Discounts for you⚡️</Text>
        <AdCard />
      </View>
      </ScrollView>
    </View>
  );
};
