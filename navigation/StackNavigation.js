/** @format */

import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
// icons
import { Feather } from "@expo/vector-icons";
// navigation
import DrawerNavigation from "./DrawerNavigation";
import TopTabNavigation from "./TopTabNavigation";
import BottomTabNav from "./BottomTabNav";
// Screens
import mainHomeScreen from "../screens/mainHomeScreen";
import HomeScreen from "../screens/HomeScreen";
import TextPartScreen from "../screens/TextPartScreen";
import ButtonPartScreen from "../screens/ButtonPartScreen";
import UILibPartScreen from "../screens/UILibPartScreen";
import SwitchScreen from "../screens/SwitchScreen";
import InputPartScreen from "../screens/InputPartScreen";
import CheckBoxScreen from "../screens/CheckBoxScreen";
import SpinnerScreen from "../screens/SpinnerScreen";
import RadioButtonScreen from "../screens/RadioButtonScreen";
import DatePickerScreen from "../screens/DatePickerScreen";
import ModalScreen from "../screens/ModalScreen";
import ToastScreen from "../screens/ToastScreen";
import CardScreen from "../screens/CardScreen";
import ComponentStack from "./ComponentStack";
import DropdownComponent from "../components/DropdownComponent";
import UIScreenShower from "../screens/UIScreen/UIScreenShower";
import instaClone from "../screens/UIScreen/instaClone";
import ProductListScreen1 from "../screens/UIScreen/ProductListScreen1";
import RegisterScreen from "../screens/UIScreen/PrescribedRegisterScreen";
import LoginScreen from "../screens/UIScreen/PrescribedLoginScreen";
import SignalregisterScreen from "../screens/UIScreen/SignalRegisterScreen";
import Signalloginscreen from "../screens/UIScreen/SignalLoginScreen";
const Stack = createStackNavigator();

const StackNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName='MainHome'>
      <Stack.Screen
        options={{ headerShown: false }}
        name='Home'
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#242B2E" },
        }}
        name='MainHome'
        component={mainHomeScreen}
      />
      <Stack.Screen name='Text' component={TextPartScreen} />
      <Stack.Screen name='Buttons' component={ButtonPartScreen} />
      <Stack.Screen name='BottomTabNav' component={BottomTabNav} />
      <Stack.Screen name='DrawerNavigation' component={DrawerNavigation} />
      <Stack.Screen name='TopTabNavigation' component={TopTabNavigation} />
      <Stack.Screen name='UI' component={UILibPartScreen} />
      <Stack.Screen name='Switch' component={SwitchScreen} />
      <Stack.Screen name='Input' component={InputPartScreen} />
      <Stack.Screen name='CheckBox' component={CheckBoxScreen} />
      <Stack.Screen name='Spinner' component={SpinnerScreen} />
      <Stack.Screen name='Radio' component={RadioButtonScreen} />
      <Stack.Screen name='DatePicker' component={DatePickerScreen} />
      <Stack.Screen name='Modal' component={ModalScreen} />
      <Stack.Screen name='Toast' component={ToastScreen} />
      <Stack.Screen name='Card' component={CardScreen} />
      <Stack.Screen name='Insta' component={instaClone} />
      <Stack.Screen name='Amazon' component={ProductListScreen1} />
      <Stack.Screen name='Dropdown' component={DropdownComponent} />
      <Stack.Screen options = {{headerShown : false}} name="Prescribed" component={LoginScreen}/>
      <Stack.Screen options = {{headerShown : false}} name='prescribedReg' component={RegisterScreen}/>
      <Stack.Screen options = {{headerShown : false}} name='SignalLog' component={Signalloginscreen}/>
      <Stack.Screen options = {{headerShown : false}} name='SignalReg' component={SignalregisterScreen}/>
      {/* component Stack */}
      <Stack.Screen
        options={{ headerShown: false }}
        name='ComponentWebView'
        component={ComponentStack}
      />
      <Stack.Screen
        name='UIScreenShower'
        component={UIScreenShower}
      />
      
    </Stack.Navigator>
  );
};

export default StackNavigation;
