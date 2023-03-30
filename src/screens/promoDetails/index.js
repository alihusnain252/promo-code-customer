import { View, Text, TextInput, Image, Pressable } from 'react-native';
import React from 'react';
import { styles } from './styles';
import {
  AdCard,
  BottomBar,
  FeaturedAds,
  FeaturedVendors,
  TopHeader,
} from '@components';
import { MyTheme } from '@utils';

import image3 from '../../assets/images/image3.png';
import AntDesign from 'react-native-vector-icons/AntDesign';


export const PromoDetails = ({navigation}) => {
  return (
    <View style={styles.dashboardContainer}>

      <View style={[styles.notificationHeader, {  }]}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={25} color="#000" />
        </Pressable>
        <Text style={styles.notificationHeaderText}>Promo Detail</Text>
      </View>

      <View style={[styles.imageView, { marginTop: 120 }]}>
        <Image source={image3} style={styles.cardImage} />
      </View>


      <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 10, padding: 10, marginBottom: 20 }}>
        <Text style={[styles.heading, { fontSize: 24, textAlign: 'center' }]}>Shoprite Accra Mall</Text>
        <Text style={[styles.heading, { textAlign: 'center' }]}>Supermarket chain with brand plus a bakery & a deli. name & house</Text>
      </View>




      <View style={{ width: '100%', flexDirection: 'row' }}>
        <Text style={styles.heading}>Located In: </Text>
        <Text style={[styles.heading, { color: '#E65C89' }]}>Accra Mall</Text>
      </View>
      <View style={{ width: '100%', flexDirection: 'row' }}>
        <Text style={styles.heading}>Address: </Text>
        <Text style={[styles.heading, { color: '#E65C89' }]}>Tetteh Quarshie Ave, Accra</Text>
      </View>
      <View style={{ width: '100%', flexDirection: 'row' }}>
        <Text style={styles.heading}>Service options: </Text>
        <Text style={[styles.heading, { color: '#E65C89' }]}>In store,  Pick up, Delivery</Text>
      </View>


      <View style={styles.discount}>
        <Text style={styles.heading}>Discounts for you⚡️</Text>
        <AdCard />
      </View>

    </View>
  )
}