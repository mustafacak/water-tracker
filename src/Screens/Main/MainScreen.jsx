// React
import React, { useState, useEffect } from "react"

// React Native
import { Text, View } from "react-native"
import { Icon } from "@rneui/themed"

// Style
import { styles } from "@styles/Main/MainScreen.styles"

// Common Component
import InputText from "@components/Common/InputText/InputText"
import CustomButton from "@components/Common/CustomBotton/CustomButton"

export default function MainScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.contentContainer}>
				
				<Text style={styles.title}>Main</Text>

			</View>
		</View>
	)
}
