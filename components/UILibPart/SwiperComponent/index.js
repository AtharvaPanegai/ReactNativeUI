import React, {Component, useState} from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';


export default function SwiperComponent() {
    const cards = useState([
        {
          image: 'https://randomuser.me/api/portraits/men/81.jpg',
          name: 'Maurice Davis',
          text: 'card one'
        },
        {
          image: 'https://randomuser.me/api/portraits/women/20.jpg',
          name: 'Bernice Alvarez',
          text: 'card two'
        },
        
      ]);
   
    return (
      <Container>
        <Header />
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{  width: 300, }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody >
                  <Image style={{ height: 100,  }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
