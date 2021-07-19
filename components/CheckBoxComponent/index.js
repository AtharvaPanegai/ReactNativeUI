
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
// install native-base using yarn add native-base or npm install native-base
import { CheckBox} from "native-base";

const CheckBoxComponent = () => {
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  const [greenCheckBoxValue, setGreenCheckBoxValue] = useState(false);
  const [redCheckBoxValue, setRedCheckBoxValue] = useState(false);
  const [blackCheckBoxValue, setBlackCheckBoxValue] = useState(false);
  

  return (
    <View>
      <View style = {{flexDirection : "row"}}>
        <CheckBox
          checked={checkBoxValue}
          onPress={() => setCheckBoxValue(!checkBoxValue)}
        />
        <Text style={{ marginLeft: 20 }}> Square CheckBox </Text>
      </View>

      <View style = {{flexDirection : "row" , marginTop: 20}}>
      <CheckBox
        checked={greenCheckBoxValue}
        color='green'
        onPress={() => setGreenCheckBoxValue(!greenCheckBoxValue)}
      />
      <Text style={{ marginLeft: 20 }}> Green Square CheckBox </Text>
      </View>

      
      <View style = {{flexDirection : "row" , marginTop: 20}}>
      <CheckBox
        checked={redCheckBoxValue}
        color='red'
        onPress={() => setRedCheckBoxValue(!redCheckBoxValue)}
      />
      <Text style={{ marginLeft: 20 }}> Red Square CheckBox </Text>
      </View>

      <View style = {{flexDirection : "row" , marginTop: 20}}>
      <CheckBox
        checked={blackCheckBoxValue}
        color='black'
        onPress={() => setBlackCheckBoxValue(!blackCheckBoxValue)}
      />
      <Text style={{ marginLeft: 20 }}> Black Square CheckBox </Text>
      </View>
    </View>
  );
};

export default CheckBoxComponent;

const styles = StyleSheet.create({});
