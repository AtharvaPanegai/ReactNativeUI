import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
// web view import
import { WebView } from 'react-native-webview';
const Stack = createStackNavigator();

// Text Part Webivies
const MoreLessCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/6e037bfc27581b11167fc837690ebb32"}} />
    )
}

const SelectableTextCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/7f2fc2e17e72ddf0934cda061c7b99d7"}} />
    )
}

const TextStyleCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/17fdb41632a42470928123a54a9b6d94"}} />
    )
}

// Input part webViews

const InputWithMaxLengthCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/8b16fa3dda26edeb60eef710864c1b25"}} />
    )
}

const MultiLineInputCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/d57e623c6b1089fbcc9373b991a73553"}} />
    )
}
const InputWithButtonCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/36153e2eea985052b8ef31c5b445a1ed"}} />
    )
}
const InputWithErrorMessageCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/6529362bc27022051c3b3a91b49221e9"}} />
    )
}

const InputwithIconCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/680d63e61449c56121bdcc7660cfd472"}} />
    )
}

const InputWithLabelsCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/f692d508c8ae70bb79a7101db86a001b"}} />
    )
}

const InputWithPlaceHolder = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/270c0931ba789527f53988111d8ff06f"}} />
    )
}

// Button Part Code

const AnimatedButtonCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/4098972118c1075be49743059360b466"}} />
    )
}
const BlockButtonCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/fe46f46032bb8ce892df63eab38a42c4"}} />
    )
}
const BorderedButtonCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/8095e065c5c904862f2fea847cbd5c67"}} />
    )
}
const ButtonWithIconCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/3990a8d6bb33036b5b2dcc882bbe9599"}} />
    )
}
const ButtonWithSpinnerCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/1aba7741665e76ba13cbd2d936dac31f"}} />
    )
}
const ColoredButtonCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/255a05ffc56f90bf6e7039e52e075d00"}} />
    )
}
const IconButtonCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/07ba8e3ba57eff6e08cd38b46eb9cc2e"}} />
    )
}
const RoundedButton = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/03b3b51c2d1b6ebf61072af9672e620a"}} />
    )
}
const SimpleButtonCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/8136219cdabc27eac3545fe0f30fa658"}} />
    )
}

// Switch

const SwitchButtonCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/ca8857f3b2c3abf36e41c41cbd8c6f23"}} />
    )
}
// CheckBox

const CheckBoxCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/977260e954ceddaf6c3e54dd015ba6fa"}} />
    )
}

// Spinner
const SpinnerCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/87b1098dac04d1fa4c49ed695cd09828"}} />
    )
}
// DatePicker
const DatePickerCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/0519a5d970dc2b0be8e73fd9ea77d39f"}} />
    )
}
// Modal
const ModalCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/25252bddbc15bbc6f59a485f6b6cadc8"}} />
    )
}
// Toast
const ToastCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/d9aa6ecc2fdca5a9791acbb7d674f9b1"}} />
    )
}
// Card
const CardCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/8b3fc4dfbb6cc5686b0430108a99e75b"}} />
    )
}
// UI Lib Part
const BottomSheetCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/b4e340b5753d8f77f462c8e6d47099cc"}} />
    )
}
const BarChartCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/4de45b7c45f9f69fbd1cb10f84d2dc59"}} />
    )
}
const ConfettiCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/f1e860717b423f22e0fdab7c99abd76d"}} />
    )
}
const RNEmojiCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/3acb83abefe0496a2e666262f765dace"}} />
    )
}
const RNFlipCardCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/c4851da4f11edebb7c335c76b9c860ca"}} />
    )
}
const RNSeekBarCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/6f3c78804b6f0f806e3cd7581e7fadd1"}} />
    )
}
const CorouselCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/c2d034fa2add806906f23544d8b93426"}} />
    )
}

// DropDown Component

const DropDownCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/b98c5667a44e7705176a664f39be8d97"}} />
    )
}
// Drawer Navigation

const DrawerCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/7cf4b5caca9edbe2e5f36a70476911ce"}} />
    )
}
const TopTabCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/e9f5d100d795acf20482ad5b1f692bf9"}} />
    )
}
const BottomTabCode = () => {
    return(
        <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/056f8d012de7916b6cf9711a055ec86a"}} />
    )
}


// UIScreen part webViews
    const AmazonCode =() => {
        return(
            <WebView source = {{uri : "https://gist.github.com/Shardul2801/2ea1a660c04fe664739b0150dc7c6f81"}} />
        )

    }

    const InstaCode =() => {
        return(
            <WebView source = {{uri : "https://gist.github.com/Shardul2801/ff6c078c63c553c249e2d4f7b6715d07"}} />
        )

    }

    const PrescribedRegCode = () => {
        return(
            <WebView source = {{uri : "https://gist.github.com/Shardul2801/5a1172707fff74c39c302a8d7cfaec57"}} />
        )

    }
    
    const PrescribedLogCode =() => {
        return(
            <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/b341d9b946b45ac64f578bbb39441c3a"}} />
        )

    }

    const SignalLogCode =() => {
        return(
            <WebView source = {{uri : "https://gist.github.com/AtharvaPanegai/808de249f8b44a231608a13134e7bdb7"}} />
        )

    }
    const AudbyteSplashCode =() => {
        return(
            <WebView source = {{uri : "https://gist.github.com/Shardul2801/fa8bcd0e2328c0ff61263f41c3858c68"}} />
        )

    }
    const iconScreenCode =() => {
        return(
            <WebView source = {{uri : "https://icons.expo.fyi/"}} />
        )

    }


const ComponentStack = () => {
    return (
        <Stack.Navigator>
            {/* Text */}
            <Stack.Screen name="MoreLessCode" component = {MoreLessCode} />
            <Stack.Screen name="SelectableTextCode" component = {SelectableTextCode} />
            <Stack.Screen name="TextStyleCode" component = {TextStyleCode} />
            {/* Icons */}
            <Stack.Screen name = "iconScreenCode" component = {iconScreenCode} />

            {/* Inputs */}
            <Stack.Screen name = "InputWithMaxLengthCode" component = {InputWithMaxLengthCode} />
            <Stack.Screen name =  "MultiLineInputCode" component = {MultiLineInputCode} />
            <Stack.Screen name = "InputWithButtonCode" component = {InputWithButtonCode} />
            <Stack.Screen name = "InputWithErrorMessageCode" component = {InputWithErrorMessageCode} />
            <Stack.Screen name = "InputwithIconCode" component = {InputwithIconCode} />
            <Stack.Screen name = "InputWithLabelsCode" component = {InputWithLabelsCode} />
            <Stack.Screen name = "InputWithPlaceHolder" component = {InputWithPlaceHolder} />
            {/* Buttons */}
            <Stack.Screen name = "AnimatedButtonCode" component = {AnimatedButtonCode} />
            <Stack.Screen name = "BlockButtonCode" component = {BlockButtonCode} />
            <Stack.Screen name = "BorderedButtonCode" component = {BorderedButtonCode} />
            <Stack.Screen name = "ButtonWithIconCode" component = {ButtonWithIconCode} />
            <Stack.Screen name = "ButtonWithSpinnerCode" component = {ButtonWithSpinnerCode} />
            <Stack.Screen name = "ColoredButtonCode" component = {ColoredButtonCode} />
            <Stack.Screen name = "IconButtonCode" component = {IconButtonCode} />
            <Stack.Screen name = "RoundedButton" component = {RoundedButton} />
            <Stack.Screen name = "SimpleButtonCode" component = {SimpleButtonCode} />
            {/* Switch */}
            <Stack.Screen name = "SwitchButtonCode" component = {SwitchButtonCode} />
            {/* CheckBox */}
            <Stack.Screen name = "CheckBoxCode" component = {CheckBoxCode} />
            {/* Spinner */}
            <Stack.Screen name = "SpinnerCode" component = {SpinnerCode} />
            {/* DatePicker */}
            <Stack.Screen name = "DatePickerCode" component = {DatePickerCode} />
            {/* Modal */}
            <Stack.Screen name = "ModalCode" component = {ModalCode} />
            {/* Toast */}
            <Stack.Screen name = "ToastCode" component = {ToastCode} />
            {/* Card */}
            <Stack.Screen name = "CardCode" component = {CardCode} />
            {/* UI Lib Part */}
            <Stack.Screen name = "BottomSheetCode" component = {BottomSheetCode} />
            <Stack.Screen name = "BarChartCode" component = {BarChartCode} />
            <Stack.Screen name = "ConfettiCode" component = {ConfettiCode} />
            <Stack.Screen name = "RNEmojiCode" component = {RNEmojiCode} />
            <Stack.Screen name = "RNFlipCardCode" component = {RNFlipCardCode} />
            <Stack.Screen name = "RNSeekBarCode" component = {RNSeekBarCode} />
            <Stack.Screen name = "CorouselCode" component = {CorouselCode} />
            {/* DropDown */}
            <Stack.Screen name = "DropDownCode" component = {DropDownCode} />  
            {/* Navigations */}
            <Stack.Screen name = "DrawerCode" component = {DrawerCode} /> 
            <Stack.Screen name = "TopTabCode" component = {TopTabCode} /> 
            <Stack.Screen name = "BottomTabCode" component = {BottomTabCode} /> 
            {/* UIScreens*/ }
            <Stack.Screen name = "AmazonCode" component = {AmazonCode} /> 
            <Stack.Screen name = "InstaCode" component = {InstaCode} /> 
            <Stack.Screen name = "PrescribedRegCode" component = {PrescribedRegCode} /> 
            <Stack.Screen name = "PrescribedLogCode" component = {PrescribedLogCode} /> 
            <Stack.Screen name = "SignalLogCode" component = {SignalLogCode} /> 
            <Stack.Screen name = "AudbyteSplashCode" component = {AudbyteSplashCode} /> 

        </Stack.Navigator>
    )
}

export default ComponentStack

const styles = StyleSheet.create({})
