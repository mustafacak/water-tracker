// React
import React, { useState } from "react"

// React Native
import { Text, View } from "react-native"

// Style
import { styles } from "@styles/Main/MainScreen.styles"

// Library
import { Calendar } from "react-native-calendars"

// Utils
import { COLOR } from "@configs/Enums"

// Component
import WaterButton from "@components/Main/WaterButton/WaterButton"
import StatusBar from "@components/Common/StatusBar/StatusBar"
import Avatar from "@components/Main/Avatar/Avatar"
import CustomModal from "@components/Modal/CustomModal"

export default function MainScreen({ navigation }) {

    // useState
    const [modalVisible, setModalVisible] = useState(false)
    const [textArray, setTextArray] = useState([])

	// Definition
	const calendarTheme = {
		calendarBackground: COLOR.BACKGROUND_COLOR,
		textSectionTitleColor: COLOR.WHITE,
		selectedDayTextColor: COLOR.WHITE,
		selectedDayBackgroundColor: COLOR.TINT,
		dayTextColor: COLOR.WHITE,
		monthTextColor: COLOR.WHITE,
		textMonthFontWeight: "bold",
	}

    function handleOnAvatar(){
        setTextArray(["User: Mustafa Ç.", "Goal: 3 lt"])
        setModalVisible(true)
    }


	// Render
	return (
		<View style={styles.container}>
			<View style={styles.contentContainer}>
                <Avatar text={"Hasan Çakmak"} onPress={handleOnAvatar} />
				<Calendar theme={calendarTheme} style={styles.calenderStyle} />
				<View style={{ flexDirection: "row" }}>
					<StatusBar completed={45} />
				</View>

				<View style={styles.waterButtonsContainer}>
					<WaterButton title={"200ml"} />
					<WaterButton title={"500ml"} />
					<WaterButton title={"750ml"} />
					<WaterButton title={"1lt"} />
				</View>
                <CustomModal modalVisible={modalVisible} textArray={textArray} setModalVisible={setModalVisible} />
			</View>
		</View>
	)
}
