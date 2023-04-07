import {View, Text, TextInput, Image, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {AdCard} from '@components';
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
      <View style={[styles.notificationHeader, {}]}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={25} color="#000" />
        </Pressable>
        <Text style={styles.notificationHeaderText}>Promo Detail</Text>
      </View>

      <View style={[styles.imageView, {marginTop: 120}]}>
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
        <Text style={[styles.heading, {fontSize: 24, textAlign: 'center'}]}>
          {promoDetails.company_name}
        </Text>
        <Text style={[styles.heading, {textAlign: 'center'}]}>
          {promoDetails.description}
        </Text>
      </View>

      <View style={{width: '100%', flexDirection: 'row'}}>
        <Text style={styles.heading}>Name : </Text>
        <Text style={[styles.heading, {color: '#E65C89'}]}>
          {venderDetails.name}
        </Text>
      </View>
      <View style={{width: '100%', flexDirection: 'row'}}>
        <Text style={styles.heading}>Located In: </Text>
        <Text style={[styles.heading, {color: '#E65C89'}]}>
          {venderDetails.locatedIn}
        </Text>
      </View>
      <View style={{width: '100%', flexDirection: 'row'}}>
        <Text style={styles.heading}>Address: </Text>
        <Text style={[styles.heading, {color: '#E65C89'}]}>
          {venderDetails.Address}
        </Text>
      </View>
      <View style={{width: '100%', flexDirection: 'row'}}>
        <Text style={styles.heading}>Service options: </Text>
        <Text style={[styles.heading, {color: '#E65C89'}]}>
          {venderDetails.ServiceOptions}
        </Text>
      </View>

      <View style={styles.discount}>
        <Text style={styles.heading}>Discounts for you⚡️</Text>
        <AdCard />
      </View>
    </View>
  );
};
