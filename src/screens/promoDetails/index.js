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
      <PromoDetailItem title={'Name '} value={promoDetails.vendor.name} />
      <PromoDetailItem title={'Located In '} value={venderDetails.locatedIn} />
      <PromoDetailItem title={'Address '} value={promoDetails.vendor.address} />
      <PromoDetailItem
        title={'Service options '}
        value={venderDetails.ServiceOptions}
      />

      <View style={styles.discount}>
        <Text style={[styles.heading, {marginLeft: '4%'}]}>
          Discounts for you⚡️
        </Text>
        <AdCard promo={promoDetails} />
      </View>
    </View>
  );
};
const PromoDetailItem = ({title, value}) => {
  return (
    <View style={{width: '100%', flexDirection: 'row'}}>
      <Text style={styles.headingVendor}>{title} : </Text>
      <Text style={[styles.headingVendorValue, {color: '#E65C89'}]}>
        {value}
      </Text>
    </View>
  );
};
