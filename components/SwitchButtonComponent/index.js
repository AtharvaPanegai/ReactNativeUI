import React, { useState } from 'react'
import { StyleSheet, Text, View,Switch } from 'react-native'

const SwitchButtonComponent = () => {
    const [switchalue, setSwitchalue] = useState(false);
    const toggleSwitch = () => setSwitchalue(previousState => !previousState);
    return (
        <View style = {styles.container}>
            <Switch 
                trackColor = {{false : "#767577",true : "#81b0ff"}}
                thumbColor = {switchalue ? "#fff" : "#f4f3f4"}
                onValueChange = {toggleSwitch}
                value = {switchalue}
            />
        </View>

    )
}

export default SwitchButtonComponent

const styles = StyleSheet.create({
    container : {
      
        justifyContent : "center",
        alignItems : "center",
    }
})
