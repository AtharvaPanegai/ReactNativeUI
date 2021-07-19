/** @format */

import * as React from "react";
import { Card } from "react-native-elements";
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import AnimatedButtonComponent from "../components/ButtonPart/AnimatedButtonComponent";
import BlockButtonComponent from "../components/ButtonPart/BlockButtonComponent";
import BorderedButtonComponent from "../components/ButtonPart/BorderedButtonComponent";
import ButtonWithIconComponent from "../components/ButtonPart/ButtonWithIconComponent";
import ButtonWithSpinnerComponent from "../components/ButtonPart/ButtonWithSpinnerComponent";
import ColoredButtonComponent from "../components/ButtonPart/ColoredButtonComponent";
import IconButtonComponent from "../components/ButtonPart/IconButtonComponent";
import RoundedButtonComponent from "../components/ButtonPart/RoundedButtonComponent";
import SimpleButtonComponent from "../components/ButtonPart/SimpleButtonComponent";

const ButtonPartScreen = ({navigation}) => {
  return (
    <ScrollView>
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
          Simple Button
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
            <SimpleButtonComponent />
            <Card.Divider style={{ marginTop: 20 }} />
          </View>

          <TouchableOpacity onPress={() => {navigation.navigate("ComponentWebView",{screen : "SimpleButtonCode" })}}>
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
          Rounded Button
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
            <RoundedButtonComponent />
            <Card.Divider style={{ marginTop: 20 }} />
          </View>

          <TouchableOpacity onPress={() => {navigation.navigate("ComponentWebView",{screen : "RoundedButton" })}}>
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
          Icon Buttons
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
            <IconButtonComponent />
            <Card.Divider style={{ marginTop: 20 }} />
          </View>

          <TouchableOpacity onPress={() => {navigation.navigate("ComponentWebView",{screen : "IconButtonCode" })}}>
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
          Colored Buttons
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
            <ColoredButtonComponent />
            <Card.Divider style={{ marginTop: 20 }} />
          </View>

          <TouchableOpacity onPress={() => {navigation.navigate("ComponentWebView",{screen : "ColoredButtonCode" })}}>
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
          Button with Spinner
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
            <ButtonWithSpinnerComponent />
            <Card.Divider style={{ marginTop: 20 }} />
          </View>

          <TouchableOpacity onPress={() => {navigation.navigate("ComponentWebView",{screen : "ButtonWithSpinnerCode" })}}>
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
          Button with Icon
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
            <ButtonWithIconComponent />
            <Card.Divider style={{ marginTop: 20 }} />
          </View>

          <TouchableOpacity onPress={() => {navigation.navigate("ComponentWebView",{screen : "ButtonWithIconCode" })}}>
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
          Border Button
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
            <BorderedButtonComponent />
            <Card.Divider style={{ marginTop: 20 }} />
          </View>

          <TouchableOpacity onPress={() => {navigation.navigate("ComponentWebView",{screen : "BorderedButtonCode" })}}>
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
          Block Button
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
            <BlockButtonComponent />
            <Card.Divider style={{ marginTop: 20 }} />
          </View>

          <TouchableOpacity onPress={() => {navigation.navigate("ComponentWebView",{screen : "BlockButtonCode" })}}>
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
          Animated Buttons
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
            <AnimatedButtonComponent />
            <Card.Divider style={{ marginTop: 20 }} />
          </View>

          <TouchableOpacity onPress={() => {navigation.navigate("ComponentWebView",{screen : "AnimatedButtonCode" })}}>
            <Text style={{ fontSize: 20, backgroundColor: "white" }}>
              Source Code
            </Text>
          </TouchableOpacity>
        </View>
      </Card>

      {/* Prev Compo Ends Here */}
    </ScrollView>
  );
};

export default ButtonPartScreen;
