import React, { useState } from 'react'
import { StyleSheet, Text, View,TouchableOpacity,ActivityIndicator} from 'react-native'

const ButtonWithSpinnerComponent = () => {
    const [submitSpinner, setSubmitSpinner] = useState(false)
    return (
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.ButtonWithSpinner} onPress = { ()=>{
                if (true) {
                    setSubmitSpinner(!submitSpinner)
                }
            }}>
                <Text style = {styles.submitSpinnerText}>Submit</Text>
                {submitSpinner? (<ActivityIndicator style = {{marginLeft : 10}} color = "black" size = "small" />) : null}

            </TouchableOpacity>
        </View>
    )
}

export default ButtonWithSpinnerComponent

const styles = StyleSheet.create({
    container : {
        justifyContent :"center",
        alignItems : "center",
    },
    ButtonWithSpinner : {
        display : "flex",
        flexDirection : "row",
        alignItems : "center",
        backgroundColor : "green",
        paddingVertical : 10,
        paddingHorizontal :24,
        borderRadius : 4,
        elevation : 2,
        shadowColor : "#000",
        shadowOpacity :0.25,
        shadowRadius :3.5,
    },
    submitSpinnerText : {
        fontSize : 20,
        fontWeight : "400",
        color : "#fff",
    }
})
