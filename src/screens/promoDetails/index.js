import {View, Text, TextInput, Image, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {AdCard, ArrowHeader} from '@components';
import {MyTheme} from '@utils';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const PromoDetails = ({route, navigation}) => {
  const {promoDetails} = route.params;
  console.log('promoDetails params : ', promoDetails);

  const venderDetails = {
    name: 'Vendor Name',
    locatedIn: 'Accra Mall',
    Address: 'Tetteh Quarshie Ave, Accra',
    ServiceOptions: 'in store , Pick up, Delivery',
  };

  return (
    <View style={styles.dashboardContainer}>
      <ArrowHeader heading="Promo Details" />

      <View style={styles.imageView}>
        <Image
          source={{uri: promoDetails.image ? promoDetails.image : ''}}
          style={styles.cardImage}
        />
      </View>

      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          padding: 10,
          marginBottom: 20,
        }}>
        <Text style={styles.heading}>{promoDetails.company_name}</Text>
        <Text style={styles.description}>{promoDetails.description}</Text>
      </View>

      <View style={{width: '100%', flexDirection: 'row'}}>
        <Text style={styles.headingVendor}>Name : </Text>
        <Text style={[styles.headingVendor, {color: '#E65C89'}]}>
          {promoDetails.vendor.name}
        </Text>
      </View>
      <View style={{width: '100%', flexDirection: 'row'}}>
        <Text style={styles.headingVendor}>Located In: </Text>
        <Text style={[styles.headingVendor, {color: '#E65C89'}]}>
          {promoDetails.vendor.city}
        </Text>
      </View>
      <View style={{width: '100%', flexDirection: 'row'}}>
        <Text style={styles.headingVendor}>Address: </Text>
        <Text style={[styles.headingVendor, {color: '#E65C89'}]}>
          {promoDetails.vendor.address}
        </Text>
      </View>
      <View style={{width: '100%', flexDirection: 'row'}}>
        <Text style={styles.headingVendor}>Service options: </Text>
        <Text style={[styles.headingVendor, {color: '#E65C89'}]}>
          {venderDetails.ServiceOptions}
        </Text>
      </View>

      <View style={styles.discount}>
        <Text style={[styles.heading, {marginLeft: '4%'}]}>
          Discounts for you⚡️
        </Text>
        <AdCard promo={promoDetails} />
      </View>
    </View>
  );
};
