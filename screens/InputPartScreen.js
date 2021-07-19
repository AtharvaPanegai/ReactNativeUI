/** @format */

import * as React from "react";
import { Card } from "react-native-elements";
import { View, Image, Text, ScrollView,TouchableOpacity } from "react-native";
// components
import TextInputMaximumLengthComponent from "../components/Inputs/TextInputMaximumLength";
import TextInputMultiLineComponent from "../components/Inputs/TextInputMultiLine";
import TextInputWithButtonComponent from "../components/Inputs/TextInputWIthButton";
import TextInputWithErrorMessageComponent from "../components/Inputs/TextInputWithErrorMessage";
import TextInputWithIconComponent from "../components/Inputs/TextInputWithIcon";
import TextInputWithLabelsComponent from "../components/Inputs/TextInputWithLabels";
import TextInputWithPlaceholderComponent from "../components/Inputs/TextInputWithPlaceholder";

const InputPartScreen = ({navigation}) => {
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
          Input with Maximum Length
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
            <TextInputMaximumLengthComponent />
            <Card.Divider style = {{marginTop : 20,}} />
          </View>
          
          <TouchableOpacity
          onPress={() => {navigation.navigate("ComponentWebView",{screen : "InputWithMaxLengthCode" })}}>
          <Text style={{ fontSize: 20, backgroundColor: 'white' ,  }}> Source Code </Text>
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
          MultiLine Input
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
            <TextInputMultiLineComponent />
            <Card.Divider style = {{marginTop : 20,}} />
          </View>
          <TouchableOpacity
          onPress={() => {navigation.navigate("ComponentWebView",{screen : "MultiLineInputCode" })}}>
          <Text style={{ fontSize: 20, backgroundColor: 'white' ,  }}> Source Code </Text>
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
          Secured Input
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
            <TextInputWithButtonComponent />
            <Card.Divider style = {{marginTop : 20,}} />
          </View>
          <TouchableOpacity
          onPress={() => {navigation.navigate("ComponentWebView",{screen : "InputWithButtonCode" })}}>
          <Text style={{ fontSize: 20, backgroundColor: 'white' ,  }}> Source Code </Text>
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
          Correct Input Check
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
            <TextInputWithErrorMessageComponent />
            <Card.Divider style = {{marginTop : 20,}} />
          </View>
          <TouchableOpacity
          onPress={() => {navigation.navigate("ComponentWebView",{screen : "InputWithErrorMessageCode" })}}>
          <Text style={{ fontSize: 20, backgroundColor: 'white' ,  }}> Source Code </Text>
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
          Text Input with Icon
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
            <TextInputWithIconComponent />
            <Card.Divider style = {{marginTop : 20,}} />
          </View>
          <TouchableOpacity
          onPress={() => {navigation.navigate("ComponentWebView",{screen : "InputwithIconCode" })}}>
          <Text style={{ fontSize: 20, backgroundColor: 'white' ,  }}> Source Code </Text>
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
          Input with Label
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
            <TextInputWithLabelsComponent />
            <Card.Divider style = {{marginTop : 20,}} />
          </View>
          <TouchableOpacity
          onPress={() => {navigation.navigate("ComponentWebView",{screen : "InputWithLabelsCode" })}}>
          <Text style={{ fontSize: 20, backgroundColor: 'white' ,  }}> Source Code </Text>
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
          Input with PlaceHolder
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
            <TextInputWithPlaceholderComponent />
            <Card.Divider style = {{marginTop : 20,}} />
          </View>
          <TouchableOpacity
          onPress={() => {navigation.navigate("ComponentWebView",{screen : "InputWithPlaceHolder" })}}>
          <Text style={{ fontSize: 20, backgroundColor: 'white' ,  }}> Source Code </Text>
          </TouchableOpacity>
        </View>
      </Card>
    </ScrollView>
  );
};

export default InputPartScreen;
