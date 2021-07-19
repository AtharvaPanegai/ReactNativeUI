/** @format */

import * as React from "react";
import { Card } from "react-native-elements";
import { View, Image, Text, ScrollView,TouchableOpacity } from "react-native";
import SwiperComponent from "../components/UILibPart/SwiperComponent";
import BottomSheetComponent from "../components/UILibPart/BottomSheetComponent";
import SwipeListComponent from "../components/UILibPart/SwipeListComponent";
import BarChartComponent from "../components/UILibPart/BarChartComponent";
import ConfettiAnimationComponent from "../components/UILibPart/ConfetttiAnimation";
import RatingsComponent from "../components/UILibPart/RatingsComponent";
import RNEmojiComponent from "../components/UILibPart/RNEmojiComponent";
import RNFlipCardComponent from "../components/UILibPart/RNFlipCardComponent";
import SeekbarComponent from "../components/UILibPart/SeekbarComponent";
import CarouselComponent from "../components/UILibPart/CarouselComponent";

// icons
import { Entypo } from "@expo/vector-icons";

const UILibPartScreen = ({navigation}) => {
  return (
    <ScrollView>
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
          Bottom Sheet
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
            <BottomSheetComponent />

            <Card.Divider style={{ marginTop: 20 }} />
          </View>

          <TouchableOpacity onPress={() => {navigation.navigate("ComponentWebView",{screen : "BottomSheetCode" })}}>
            <Text style={{ fontSize: 20, backgroundColor: "white" }}>
              {" "}
              Source Code{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </Card>
      {/* Prev Compo Ends Here */}

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
          Bar Chart
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
            <BarChartComponent />

            <Card.Divider style={{ marginTop: 20 }} />
          </View>

          <TouchableOpacity onPress={() => {navigation.navigate("ComponentWebView",{screen : "BarChartCode" })}}>
            <Text style={{ fontSize: 20, backgroundColor: "white" }}>
              {" "}
              Source Code{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </Card>
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
          Confettti Animation
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
            <ConfettiAnimationComponent />

            <Card.Divider style={{ marginTop: 20 }} />
          </View>

          <TouchableOpacity onPress={() => {navigation.navigate("ComponentWebView",{screen : "ConfettiCode" })}}>
            <Text style={{ fontSize: 20, backgroundColor: "white" }}>
              {" "}
              Source Code{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </Card>
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
          React Native Emoji
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
            <RNEmojiComponent />

            <Card.Divider style={{ marginTop: 20 }} />
          </View>

          <TouchableOpacity onPress={() => {navigation.navigate("ComponentWebView",{screen : "RNEmojiCode" })}}>
            <Text style={{ fontSize: 20, backgroundColor: "white" }}>
              {" "}
              Source Code{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </Card>
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
          Flip Card
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
            <RNFlipCardComponent />

            <Card.Divider style={{ marginTop: 20 }} />
          </View>

          <TouchableOpacity onPress={() => {navigation.navigate("ComponentWebView",{screen : "RNFlipCardCode" })}}>
            <Text style={{ fontSize: 20, backgroundColor: "white" }}>
              {" "}
              Source Code{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </Card>
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
          Seekbar
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
            <SeekbarComponent />

            <Card.Divider style={{ marginTop: 20 }} />
          </View>

          <TouchableOpacity onPress={() => {navigation.navigate("ComponentWebView",{screen : "RNSeekBarCode" })}}>
            <Text style={{ fontSize: 20, backgroundColor: "white" }}>
              {" "}
              Source Code{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </Card>

      {/* Prev Compo Ends Here */}
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
          Carousel{" "}
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
            <CarouselComponent />

            <Card.Divider style={{ marginTop: 20 }} />
          </View>

          <TouchableOpacity onPress={() => {navigation.navigate("ComponentWebView",{screen : "CorouselCode" })}}>
            <Text style={{ fontSize: 20, backgroundColor: "white" }}>
              {" "}
              Source Code{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </Card>
    </ScrollView>
  );
};

export default UILibPartScreen;
