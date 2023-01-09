// React
import React from "react"

// React Native
import { View } from "react-native"
import { Icon } from "@rneui/themed"

// Style
import { styles } from "@styles/Register/RegisterScreen.styles"

// Common Component
import InputText from "@components/Common/InputText/InputText"
import CustomButton from "@components/Common/CustomBotton/CustomButton"

export default function RegisterScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.contentContainer}>
				<Icon name="local-drink" type="material" color="#517fa4" />
				<InputText placeholder={"First Name"} />
				<InputText placeholder={"Last Name"} />
				<InputText placeholder={"Age"} />
				<CustomButton title={"Save"} />
			</View>
		</View>
	)
}
