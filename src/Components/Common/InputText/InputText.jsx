// React 
import React from "react" 

// React Native 
import { TextInput, View } from "react-native"

// Style
import { styles } from "./InputText.styles"

export default function InputText({ val, setVal, placeholder }) {
    return(
        <View style={styles.container}>
            <TextInput placeholder={placeholder} placeholderTextColor={"#CCC"} color={"white"} value={val} onChangeText={setVal} style={styles.textInput}  />
        </View>
    )
}