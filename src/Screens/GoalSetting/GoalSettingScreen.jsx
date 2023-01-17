// React
import React, { useState, useEffect } from "react"

// React Native
import { Text, View } from "react-native"
import { Icon } from "@rneui/themed"
import { useFocusEffect, useIsFocused } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"

// Style
import { styles } from "@styles/GoalSetting/GoalSettingScreen.styles"

// Common Component
import InputText from "@components/Common/InputText/InputText"
import CustomButton from "@components/Common/CustomBotton/CustomButton"
import { COLOR } from "@configs/Enums"

export default function GoalSettingScreen({ navigation }) {

    // Definition
    const isFocused = useIsFocused()

	// useState
	const [goal, setGoal] = useState("")

	// useEffect
	useEffect(() => {
		console.log("goal useEffect---------")
		//debugger
		AsyncStorage.getItem("goal").then((goal) => {
			console.log("Goal ü aldım set ettim2", goal)
			setGoal(goal)
		})
	}, [isFocused])

	// Function
	function navigateMainScreen() {
		navigation.navigate("Main")
	}

	function handleOnSave() {
		AsyncStorage.setItem("goal", goal)
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
				<CustomButton title={"Save"} onPress={handleOnSave} />
				<CustomButton title={"Cancel"} color={COLOR.ORANGE} />
			</View>
		</View>
	)
}
