import {View, Text, Image, Pressable, Modal} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import image1 from "../../assets/icons/cat1.png"
import image2 from "../../assets/icons/cat2.png"
import image3 from "../../assets/icons/cat3.png"
import image4 from "../../assets/icons/cat4.png"
import image5 from "../../assets/icons/cat5.png"
import image6 from "../../assets/icons/cat6.png"


const categories=[
  {
    id:1,
    name:"Food and Beverage ",
    icon: image1,
  },
  {
    id:2,
    name:"Shopping and Retail",
    icon: image2
  },
  {
    id:3,
    name:"Beach Resorts & Swimming Pools",
    icon: image3
  },
  {
    id:4,
    name:"Hotels and Resorts",
    icon: image4
  },
  {
    id:5,
    name:"Tattoos, Body & Beauty Care",
    icon: image5
  },
  {
    id:6,
    name:"Education",
    icon: image6
  },
  {
    id:7,
    name:"Pet Shops & Veterinary Services",
    icon: image2
  },
  {
    id:8,
    name:"Super markets",
    icon: image4
  },
  {
    id:9,
    name:"Health & Wellness",
    icon: image6
  },
  {
    id:10,
    name:"Home Decoration & Furniture",
    icon: image3
  },
  {
    id:11,
    name:"Entreating & Sports Activities",
    icon: image5
  },
  {
    id:12,
    name:"Diverse Services",
    icon: image1
  },
]

export const BottomBar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.bottomBarContainer}>
      <Pressable
        style={styles.iconView}
        onPress={() => navigation.navigate('Dashboard')}>
        <Image
          source={require('../../assets/icons/home.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>Home</Text>
      </Pressable>
      <Pressable style={styles.iconView} onPress={() => setModalVisible(true)}>
        <Entypo name="grid" size={21.67} color="#fff" />
        <Text style={styles.iconText}>Categories</Text>
      </Pressable>
      <Pressable
        style={styles.iconView}
        onPress={() => navigation.navigate('Favorite')}>
        <Image
          source={require('../../assets/icons/favorites.png')}
          style={styles.icon}
        />
        <Text style={styles.iconText}>Favorites</Text>
      </Pressable>
      <Pressable
        style={styles.iconView}
        onPress={() => navigation.navigate('AccountScreen')}>
        <MaterialIcons name="person" size={21.67} color="#fff" />
        <Text style={styles.iconText}>Account</Text>
      </Pressable>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable
                style={styles.buttonClose}
                onPress={() => setModalVisible(!modalVisible)}></Pressable>
              <Text style={styles.modalText}>Categories </Text>
              <View style={styles.categoriesView}>
                {
                  categories.map((cat)=>{
                    return(
                      <CategoryCard name={cat.name} icon={cat.icon}/>
                    )
                  })
                }
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const CategoryCard = (props) => {
  return (
    <View style={styles.category}>
      <View style={styles.categoryIconView}>
        <Image source={props.icon} style={styles.categoryIcon} />
      </View>
      <Text style={styles.categoryText}>{props.name}</Text>
    </View>
  );
};
