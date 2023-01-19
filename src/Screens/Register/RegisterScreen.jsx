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
import { COLOR, TITLE } from "@configs/Enums"
import { NAVIGATION_SCREENS } from "../../Constants/navigationConstants"

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
        navigation.navigate(NAVIGATION_SCREENS.GOAL)
    }

    function handleOnRegister(){
        const userData = {
            firstName: firstName,
            lastName: lastName,
            age: age
        }
        AsyncStorage.setItem("userData", JSON.stringify(userData))
        AsyncStorage.setItem("markedDates", JSON.stringify({}))
        navigateGoalScreen()
    }

    useEffect(() => {
        AsyncStorage.getItem("userData").then((userData) => {

            if(userData){
                console.log("userdata var!")
                AsyncStorage.getItem("goal").then((goal) => {
                    goal ?  navigation.navigate(NAVIGATION_SCREENS.MAIN) : navigation.navigate(NAVIGATION_SCREENS.GOAL)
                }) // reeturn
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
                <Text style={styles.title}>Water Trackers</Text>
				<InputText val={firstName} setVal={setFirstName} placeholder={TITLE.FIRST_NAME} />
				<InputText val={lastName} setVal={setLastName} placeholder={TITLE.LAST_NAME} />
				<InputText val={age} setVal={setAge} placeholder={TITLE.AGE} />
				<CustomButton title={TITLE.SAVE} onPress={handleOnRegister} />
			</View>
		</View>
	)
}
