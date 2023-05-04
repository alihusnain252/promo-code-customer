import {
  View,
  Text,
  Image,
  Pressable,
  Modal,
  ScrollView,
  FlatList,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import image1 from '../../assets/icons/cat1.png';
import image2 from '../../assets/icons/cat2.png';
import image3 from '../../assets/icons/cat3.png';
import image4 from '../../assets/icons/cat4.png';
import image5 from '../../assets/icons/cat5.png';
import image6 from '../../assets/icons/cat6.png';
import {useSelector} from 'react-redux';
import {token} from '@redux/tokenSlice';
import {MyTheme, customerUris} from '@utils';
import {GetRequest} from '../../api/apiCall';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const BottomBar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalCategories, setModalCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const userToken = useSelector(token);

  const categoriesHandler = () => {
    setModalVisible(true);
    setLoading(true);
    GetRequest(customerUris.categories).then(res => {
      if (res.data.success === true) {
        // setAllPromotions(res.data.data.promotions.data);
        console.log(res.data.data.categories);
        setModalCategories(res.data.data.categories);
        setLoading(false);
      } else {
        Alert.alert(res.data.message);
        setLoading(false);
      }
    });
  };

  const Item = ({data, setModalVisible}) => (
    <CategoryCard data={data} setModalVisible={setModalVisible} />
  );

  return (
    <View style={styles.bottomBarContainer}>
      <Pressable
        style={styles.iconView}
        onPress={() => navigation.navigate('Dashboard')}>
        <Image
          source={require('../../assets/icons/home.png')}
          style={[styles.icon, {tintColor: MyTheme.primary}]}
        />
        <Text style={[styles.iconText, {color: MyTheme.primary}]}>Home</Text>
      </Pressable>

      <Pressable style={styles.iconView} onPress={() => categoriesHandler()}>
        <Entypo name="grid" size={21.67} color="#fff" />
        <Text style={styles.iconText}>Categories</Text>
      </Pressable>

      <Pressable
        style={styles.iconView}
        onPress={() =>
          userToken.token === ''
            ? navigation.navigate('Login')
            : navigation.navigate('Favorite')
        }>
        <AntDesign name="heart" size={20} color={MyTheme.white} />
        <Text style={styles.iconText}>Favorites</Text>
      </Pressable>

      <Pressable
        onPress={() =>
          userToken.token === ''
            ? navigation.navigate('Login')
            : navigation.navigate('AccountScreen')
        }>
        <View style={styles.iconView}>
          <MaterialIcons name="person" size={21.67} color="#fff" />
          <Text style={styles.iconText}>Account</Text>
        </View>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <Pressable
            style={{width: '100%', height: '100%'}}
            onPress={() => setModalVisible(false)}></Pressable>
          <View style={styles.modalView}>
            <Pressable
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}></Pressable>
            <Text style={styles.modalText}>Categories </Text>
            <View
              style={
                loading === false
                  ? {display: 'none'}
                  : {
                      marginTop: '2%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '25%',
                    }
              }>
              <ActivityIndicator size={36} color={MyTheme.yellow} />
            </View>
            <FlatList
              data={modalCategories}
              renderItem={({item}) => (
                <Item data={item} setModalVisible={setModalVisible} />
              )}
              keyExtractor={item => item.id}
              numColumns={4}
              showsVerticalScrollIndicator={false}
              style={styles.flatList}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const CategoryCard = ({data, setModalVisible}) => {
  const navigation = useNavigation();

  const cardPressHandler = () => {
    setModalVisible(false);
    navigation.navigate('SearchVendor', {catId: data.id});
  };

  return (
    <View style={styles.category}>
      <Pressable
        onPress={() => cardPressHandler()}
        style={styles.categoryPress}>
        <View style={styles.categoryIconView}>
          <Image source={{uri: data.image}} style={styles.categoryIcon} />
        </View>
        <View style={styles.categoryTextView}>
          <Text style={styles.categoryText}>{data.name}</Text>
        </View>
      </Pressable>
    </View>
  );
};
