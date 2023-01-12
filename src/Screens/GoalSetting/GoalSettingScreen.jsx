// React
import React, { useState, useEffect } from "react"

// React Native
import { Text, View } from "react-native"
import { Icon } from "@rneui/themed"
import { useFocusEffect } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"

// Style
import { styles } from "@styles/GoalSetting/GoalSettingScreen.styles"

// Common Component
import InputText from "@components/Common/InputText/InputText"
import CustomButton from "@components/Common/CustomBotton/CustomButton"
import { COLOR } from "@configs/Enums"

export default function GoalSettingScreen({ navigation }) {
	// useState
	const [goal, setGoal] = useState("")

	//debugger

	// useEffect
    useFocusEffect(() => {
        

            console.log("focus effect !")
            AsyncStorage.getItem("goal").then((goalData) => {
                //console.log("Goal", goal)
                //setGoal(goalData)
            })
            console.log("test callback")
  
           
      
    })

	useEffect(() => {
		console.log("goal useEffect")
		//debugger
		AsyncStorage.getItem("goal").then((goal) => {
			console.log("Goal", goal)
		})
	}, [])

	// Function
	function navigateMainScreen() {
		navigation.navigate("Main")
	}

	function goalSetting() {
		AsyncStorage.setItem("goal", goal)
		//console.log("Set goal", goal)
		navigateMainScreen()
	}

	return (
		<View style={styles.container}>
			<View style={styles.contentContainer}>
				<Icon
					name="bullseye"
					type="font-awesome"
					size={100}
					color="#5eb6ff"
				/>
				<Text style={styles.title}>Daily Water Target</Text>
				<InputText val={goal} setVal={setGoal} placeholder={"2 lt"} />
				<CustomButton title={"Save"} onPress={goalSetting} />
				<CustomButton title={"Cancel"} color={COLOR.ORANGE} />
			</View>
		</View>
	)
}
