// React
import React, { useState, useEffect } from "react"

// React Native
import { Text, View } from "react-native"
import { Icon } from "@rneui/themed"
import { useIsFocused } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"

// Style
import { styles } from "@styles/GoalSetting/GoalSettingScreen.styles"

// Utils
import { NAVIGATION_SCREENS } from "../../Constants/navigationConstants"

// Common Component
import InputText from "@components/Common/InputText/InputText"
import CustomButton from "@components/Common/CustomBotton/CustomButton"
import { COLOR, TITLE } from "@configs/Enums"

export default function GoalSettingScreen({ navigation }) {

    // Definition
    const isFocused = useIsFocused()

	// useState
	const [goal, setGoal] = useState("")

	// useEffect
	useEffect(() => {
		AsyncStorage.getItem("goal").then((goal) => {
			setGoal(goal)
		})
	}, [isFocused])

	// Function
	function navigateMainScreen() {
		navigation.navigate(NAVIGATION_SCREENS.MAIN) // Sadece screens şeklinde isimlendirebilirsin
	}

	function handleOnSave() {
		AsyncStorage.setItem("goal", goal)
		navigateMainScreen()
	}

    function handleOnCancel(){
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
				<Text style={styles.title}>{TITLE.DAILY_WATER_GOAL}</Text>
				<InputText val={goal} setVal={setGoal} placeholder={TITLE.GOAL_INPUT_PLACEHOLDER} />
				<CustomButton title={TITLE.SAVE} onPress={handleOnSave} />
				<CustomButton title={TITLE.CANCEL} color={COLOR.ORANGE} onPress={handleOnCancel} />
			</View>
		</View>
	)
}
