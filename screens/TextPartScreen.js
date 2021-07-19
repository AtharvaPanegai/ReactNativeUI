/** @format */

import * as React from "react";
import { Card } from "react-native-elements";
import { View, Image, Text, ScrollView,TouchableOpacity } from "react-native";
import MoreOrLessComponent from "../components/TextPart/MoreLessComponent";
import SelectableText from "../components/TextPart/SelectableText";
import TextStyleComponent from "../components/TextPart/TextStyleComponent";

export default ({navigation}) => {
  return (
    <ScrollView>
      <Text style={{ fontWeight: "bold", fontSize: 25, paddingLeft: 15 }}>
        Text
      </Text>
      {/* New Compo Starts Here */}
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
          More/Less Component
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
            <MoreOrLessComponent />

            <Card.Divider style={{ marginTop: 20 }} />
          </View>

          <TouchableOpacity onPress={() => {navigation.navigate("ComponentWebView",{screen : "MoreLessCode" })}}>
            <Text style={{ fontSize: 20, backgroundColor: "white" }}>
           
              Source Code
            </Text>
          </TouchableOpacity>
        </View>
      </Card>
      {/* Prev Compo Ends Here */}
      {/* New Compo Starts Here */}
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
          Selectable Text
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
            <SelectableText />
            <Card.Divider style={{ marginTop: 20 }} />
          </View>

          <TouchableOpacity onPress={() => {navigation.navigate("ComponentWebView",{screen : "SelectableTextCode" })}}>
            <Text style={{ fontSize: 20, backgroundColor: "white" }}>
              {" "}
              Source Code{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </Card>
      {/* Prev Compo Ends Here */}
      {/* New Compo Starts Here */}
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
          Text Styles{" "}
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
            <TextStyleComponent />

            <Card.Divider style={{ marginTop: 20 }} />
          </View>

          <TouchableOpacity onPress={() => {navigation.navigate("ComponentWebView",{screen : "TextStyleCode" })}}>
            <Text style={{ fontSize: 20, backgroundColor: "white" }}>
              {" "}
              Source Code{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </Card>
      {/* Prev Compo Ends Here */}
    </ScrollView>
  );
};
