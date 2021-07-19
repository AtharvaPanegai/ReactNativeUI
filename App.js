/** @format */


import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// navigation Import
import StackNavigation from "./navigation/StackNavigation";



export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

