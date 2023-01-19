// React
import React, { useState, useEffect } from "react"

// React Native
import { View, Text } from "react-native"
import { Icon } from "@rneui/themed"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useIsFocused } from "@react-navigation/native"

// Style
import { styles } from "@styles/Register/RegisterScreen.styles"

// Utils
import { COLOR } from "@configs/Enums"

// Common Component
import InputText from "@components/Common/InputText/InputText"
import CustomButton from "@components/Common/CustomBotton/CustomButton"

export default function RegisterScreen({ navigation }) {

    // Definition
    const isFocused = useIsFocused()

    // useState
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")

    // Function
    function navigateGoalScreen() {
        navigation.navigate("GoalSettingScreen")
    }

    function register(){
        //console.log(firstName + " " + lastName + " " + age)
        const userData = {
            firstName: firstName,
            lastName: lastName,
            age: age
        }
        AsyncStorage.setItem("userData", JSON.stringify(userData))
        AsyncStorage.setItem("markedDates", JSON.stringify({}))
        navigateGoalScreen()
    }


    const fetchAllItems = async () => {
        try {
            const keys = await AsyncStorage.getAllKeys()
            const items = await AsyncStorage.multiGet(keys)
    
            console.table(items)
        } catch (error) {
            console.log(error, "problemo")
        }
    }

    useEffect(() => {
        AsyncStorage.getItem("userData").then((userData) => {
            //debugger
            if(userData){
                console.log("userdata var!")
                AsyncStorage.getItem("goal").then((goal) => {
                    goal ?  navigation.navigate("MainScreen") : navigation.navigate("GoalSettingScreen")
                })
            } else{
                console.log("userdata yok ")
            }
        }).catch((error) => {
            console.log("error:", error)
        })
    }, [isFocused])

	return (
		<View style={styles.container}>
			<View style={styles.contentContainer}>
                
				<Icon name="tint" type="font-awesome" size={100} color={COLOR.TINT} />
                <Text style={styles.title}>Water Tracker</Text>
				<InputText val={firstName} setVal={setFirstName} placeholder={"First Name"} />
				<InputText val={lastName} setVal={setLastName} placeholder={"Last Name"} />
				<InputText val={age} setVal={setAge} placeholder={"Age"} />
				<CustomButton title={"Save"} onPress={register} />
			</View>
		</View>
	)
}
