import React, { useState } from 'react'
import { StyleSheet, Text, View ,TextInput } from 'react-native'

const TextInputWithErrorMessageComponent = () => {
    const [email, setEmail] = useState("")
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    return (
        <View style = {styles.container}>
            <TextInput 
                style = {styles.input}
                placeholder = "Email Addresss"
                keyboardType = "email-address"
                onChangeText = {(text)=>{setEmail(text)}}
            />
            {!validateEmail(email) && email.length >0 && (
                <Text style = {styles.errorText} >Enter Valid Email Address</Text>
            )}
        </View>
    )
}

export default TextInputWithErrorMessageComponent

const styles = StyleSheet.create({
    input : {
        width: "100%",
        height: 44,
        backgroundColor: "#CAD5E2",
        paddingRight : 200,
        paddingLeft : 10,
        borderRadius: 8,
    },
    container : {
        display : "flex",
        alignItems : "flex-start",
    },
    errorText : {
        marginTop : 10,
        color : "red",
    }
})
