import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  Alert
} from 'react-native';

// yarn add  react-native-snap-carousel or npm install react-native-snap-carousel
import Carousel from 'react-native-snap-carousel';

export default function CarouselComponent() {

  const [userData] = useState([
    {
      img: 'https://randomuser.me/api/portraits/men/36.jpg',
      name: 'Maurice Davis',
    },
    {
      img: 'https://randomuser.me/api/portraits/men/78.jpg',
      name: 'Bernice Alvarez',
    },
    {
      img: 'https://randomuser.me/api/portraits/men/35.jpg',
      name: 'Jennie Barnett',
    },
    {
      img: 'https://randomuser.me/api/portraits/women/90.jpg',
      name: 'Matthew Wagner',
    },
    {
      img: 'https://randomuser.me/api/portraits/women/19.jpg',
      name: 'Christian Wilson',
    },
    {
      img: 'https://randomuser.me/api/portraits/women/21.jpg',
      name: 'Sophia Fernandez',
    },
    {
      img: 'https://randomuser.me/api/portraits/women/50.jpg',
      name: 'Sylvia Lynch',
    },
  ]);

  return (
    <View style = {{justifyContent : "center",alignItems : "center"}}>
      <Carousel
        data={userData}
        layout='default'
        loop={true}
        renderItem={({ item, index }) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => {
                Alert.alert(item.name);
              }}
            >
              <View style={styles.carouselItem}>
                <Image
                  style={{ width: 300, height: 200, borderRadius: 10 }}
                  source={{ uri: item.img }}
                />
                <Text
                  style={{
                    position: 'absolute',
                    bottom: 10,
                    left: 10,
                    color: '#fff',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
        sliderWidth={1000}
        itemWidth={300}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  carouselItem: {
 

    // position: 'absolute',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
})