import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
// yarn add @react-native-picker/picker or npm install @react-native-picker/picker
import {Picker} from '@react-native-picker/picker'

const DropdownComponent = () => {
    const[pickerValue, setPickerValue] = useState('Javascript')
    return (
        <View style={styles.container}>
            <Picker
            style={styles.picker}
            selectedValue={pickerValue}
            onValueChange={ (itemValue) => setPickerValue(itemValue)}
            >
            <Picker.Item label= "Javascript" value="Javascript"/>
            <Picker.Item label= "Typescript" value="Typescript"/>
            <Picker.Item label= "Java" value="Java"/>
            <Picker.Item label= "Python" value="Python"/>
            <Picker.Item label= "Ruby" value="Ruby"/>
            <Picker.Item label= "CPP" value="CPP"/>
            </Picker>
        </View>
    )
}

export default DropdownComponent

const styles = StyleSheet.create({
    container: {
        
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    },
    picker: {
        width:300,
        height:45,
        borderColor: "#ddd",
        borderWidth: 1,
        color: "black",
        
       
        
    }
})





