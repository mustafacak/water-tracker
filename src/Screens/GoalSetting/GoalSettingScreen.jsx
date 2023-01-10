// React
import React, { useState, useEffect } from "react"

// React Native
import { Text, View } from "react-native"
import { Icon } from "@rneui/themed"

// Style
import { styles } from "@styles/GoalSetting/GoalSettingScreen.styles"

// Common Component
import InputText from "@components/Common/InputText/InputText"
import CustomButton from "@components/Common/CustomBotton/CustomButton"

export default function GoalSettingScreen({ navigation }) {
	// Function
	function navigateMainScreen() {
		navigation.navigate("Main")
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
				<InputText placeholder={"2 lt"} />
				<CustomButton title={"Edit"} color={"#FFB300"} />
				<CustomButton title={"Save"} onPress={navigateMainScreen} />
			</View>
		</View>
	)
}
