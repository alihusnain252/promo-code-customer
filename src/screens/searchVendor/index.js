import {View, Text, TextInput, Pressable, Image, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {AdCard, ArrowHeader} from '@components';
import {MyTheme} from '@utils';

export const SearchVendor = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      orderIndex: '1',
      orderCustomerId: '04453453451',
      orderTime: '5/6/22 . 12:49 AM',
      orderPrice: '329.00',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      orderIndex: '2',
      orderCustomerId: '12445342534',
      orderTime: '9/6/22 . 02:00 AM',
      orderPrice: '229.00',
    },
    {
      id: '11194a0f-3da1-471f-bd96-145571e29d72',
      orderIndex: '3',
      orderCustomerId: '733534533451',
      orderTime: '12/7/22 . 4:40 AM',
      orderPrice: '124.00',
    },
    {
      id: '67594a0f-3da1-471f-bd96-145571e29d72',
      orderIndex: '4',
      orderCustomerId: '432534533451',
      orderTime: '23/9/22 . 5:50 PM',
      orderPrice: '420.00',
    },
    {
      id: '43294a0f-3da1-471f-bd96-145571e29d72',
      orderIndex: '5',
      orderCustomerId: '111134533451',
      orderTime: '12/10/22 . 4:30 AM',
      orderPrice: '1421.00',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      orderIndex: '6',
      orderCustomerId: '321253453321',
      orderTime: '01/4/23 . 12:00 PM',
      orderPrice: '124.00',
    },
  ];

  const Item = ({orderIndex, orderCustomerId, orderTime, orderPrice}) => (
    <AdCard />
  );

  return (
    <View style={styles.searchVendorContainer}>
      <ArrowHeader heading="Search Vendor" />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search (Vendor, Offers)"
          placeholderTextColor={MyTheme.EerieBlack}
        />
        <Pressable
          style={styles.searchPress}
          onPress={() => navigation.navigate('SearchVendor')}>
          <Image
            source={require('../../assets/icons/search.png')}
            style={styles.searchImage}
          />
        </Pressable>
      </View>
      <View style={styles.ordersList}>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <Item
              orderIndex={item.orderIndex}
              orderCustomerId={item.orderCustomerId}
              orderPrice={item.orderPrice}
              orderTime={item.orderTime}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};
