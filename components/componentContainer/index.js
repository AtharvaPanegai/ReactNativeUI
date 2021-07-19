/** @format */

import * as React from "react";
import { Card } from "react-native-elements";
import { View, Image, Text } from "react-native";

import ActivityComponent from "../Spinners/ActivityIndicator";
import SpinnersFromLoading from "../Spinners/SpinnersFromLoading";
import SwitchButtonComponent from "../SwitchButtonComponent";
import DatePickerComponent from "../DatePickerComponent";
import RadioButtonComponent from "../RadioButtonComponent";
import CheckBoxComponent from "../CheckBoxComponent";
import ButtonWithSpinnerComponent from "../ButtonPart/ButtonWithSpinnerComponent";
import IconButtonComponent from "../ButtonPart/IconButtonComponent";
import AnimatedButtonComponent from "../ButtonPart/AnimatedButtonComponent";
import ToastComponent from "../ToastComponent";
import CardComponent from "../CardComponent";
import RNEmojiComponent from "../UILibPart/RNEmojiComponent";
import BarChartComponent from "../UILibPart/BarChartComponent";
import RNFlipCardComponent from "../UILibPart/RNFlipCardComponent";
import ConfettiAnimationComponent from "../UILibPart/ConfetttiAnimation";
import CarouselComponent from "../UILibPart/CarouselComponent";
import SwipeListComponent from "../UILibPart/SwipeListComponent";
import BottomSheetComponent from "../UILibPart/BottomSheetComponent";
import SwiperComponent from "../UILibPart/SwiperComponent";



export default () => {
  return (
    <Card containerStyle={{ width: "90%" }} wrapperStyle={{}}>
      <Card.Title style={{ fontSize: 20, backgroundColor:'red' }}>Component Name</Card.Title>
      <Card.Divider />
      <View
        style={{
          position: "relative",
          alignItems: "center",
        }}>
        <View>
          {/* Component Goes Here */}
          {/* Component should be without flex : 1 */}

        <SwiperComponent />
        </View>
      </View>
    </Card>
  );
};
