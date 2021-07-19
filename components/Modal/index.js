/** @format */

import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity ,Button} from "react-native";
// import modal by yarn add react-native-modal or npm install react-native-modal
import RNModal from "react-native-modal";

const ModalComponent = () => {
  const toggleModal = () => {
    setRnModalVisible(!rnModalVisible);
  };

  const [rnModalVisible, setRnModalVisible] = useState(false);
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Button style={styles.rnmodalButtonText} title = "Open Modal" onPress = {toggleModal} />
      <RNModal
        isVisible={rnModalVisible}
        animationIn='zoomIn'
        animationOut='zoomOut'>
        <View style={styles.RnModalView}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>Title</Text>
          <Text style={{ marginVertical: 10 }}>
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make{" "}
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <TouchableOpacity
              style={styles.rnmodalButton}
              onPress={() => setRnModalVisible(false)}>
              <Text style={styles.rnmodalButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.rnmodalButton}
              onPress={() => setRnModalVisible(false)}>
              <Text style={styles.rnmodalButtonText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </RNModal>
    </View>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  RnModalView: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 14,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  rnmodalButton : {
    backgroundColor: "#03203C",
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 2,
    marginHorizontal : 5,
  },
  rnmodalButtonText : {
      color : "#fff",
      fontSize : 16,
  }
});
