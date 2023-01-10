// React
import React from "react"

// React Native
import { View, Text } from "react-native"
import { Icon } from "@rneui/themed"

// Style
import { styles } from "@styles/Register/RegisterScreen.styles"

// Utils
import { COLOR } from "@configs/Enums"

// Common Component
import InputText from "@components/Common/InputText/InputText"
import CustomButton from "@components/Common/CustomBotton/CustomButton"

export default function RegisterScreen({ navigation }) {

    // Function
    function navigateGoalScreen() {
        navigation.navigate("GoalSetting")
    }

	return (
		<View style={styles.container}>
			<View style={styles.contentContainer}>
                
				<Icon name="tint" type="font-awesome" size={100} color={COLOR.TINT} />
                <Text style={styles.title}>Water Tracker</Text>
				<InputText placeholder={"First Name"} />
				<InputText placeholder={"Last Name"} />
				<InputText placeholder={"Age"} />
				<CustomButton title={"Save"} onPress={navigateGoalScreen} />
			</View>
		</View>
	)
}
