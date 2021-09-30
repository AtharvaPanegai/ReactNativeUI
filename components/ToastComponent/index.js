import React from 'react'
import { StyleSheet, Text, View,ToastAndroid,TouchableOpacity } from 'react-native'

const ToastComponent = () => {

    const showToastWithGravity = () => {
        ToastAndroid.showWithGravity(
          "All Your Base Are Belong To Us",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      };

    return (
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.buttonOpacity} onPress={() => showToastWithGravity()}>
                <Text style = {styles.buttonText}>Show Toast</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ToastComponent

const styles = StyleSheet.create({
    container : {
        justifyContent : "center",
        alignItems : "center",
    },
    buttonOpacity : {
        backgroundColor : "#03C6C7",
        paddingVertical : 10,
        paddingHorizontal : 20,
        borderRadius : 4,
    },
    buttonText : {
        color : "#fff",
        fontWeight : "bold",
        fontSize : 17,
    }
})
