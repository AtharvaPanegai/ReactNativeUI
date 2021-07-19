/** @format */

import * as React from "react";
// install react-native-elements by yarn add react-native-elements or npm install react-native-elements
import { Card } from "react-native-elements";
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";


const CardScreen = ({navigation}) => {
  return (
    <View>
      <Card
        containerStyle={{ width: "90%", marginVertical: 10 }}
        wrapperStyle={{}}>
        <Card.Title
          style={{
            fontSize: 20,
            backgroundColor: "#242B2E",
            color: "white",
            fontWeight: "100",
            paddingVertical: 15,
          }}>
          Card
        </Card.Title>
        <Card.Divider />
        <View
          style={{
            position: "relative",
            alignItems: "center",
          }}>
          <View>
            {/* Component Goes Here */}
            {/* Component should be without flex : 1 */}

            
            <Text>not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versio</Text>
            <Card.Divider style={{ marginTop: 20 }} />

     
          </View>
          
          <TouchableOpacity
          onPress={() => {navigation.navigate("ComponentWebView",{screen : "CardCode" })}}>
          <Text style={{ fontSize: 20, backgroundColor: 'white' ,  }}> Source Code </Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
};

export default CardScreen;
