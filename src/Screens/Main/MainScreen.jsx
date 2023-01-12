// React
import React, { useState, useEffect } from "react"

// React Native
import { Text, View } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

// Style
import { styles } from "@styles/Main/MainScreen.styles"

// Library
import { Calendar } from "react-native-calendars"

// Config
import { COLOR } from "@configs/Enums"

// Utils
import waterConverter from "../../Utils/waterConverter"

// Component
import WaterButton from "@components/Main/WaterButton/WaterButton"
import StatusBar from "@components/Common/StatusBar/StatusBar"
import Avatar from "@components/Main/Avatar/Avatar"
import CustomModal from "@components/Modal/CustomModal"

export default function MainScreen({ navigation }) {
	// useState
	const [modalVisible, setModalVisible] = useState(false)
	const [textArray, setTextArray] = useState([])
	const [userData, setUserData] = useState({})
	const [goal, setGoal] = useState(0)
    const [additionalButton, setAdditionalButton] = useState(false)

    // useEffect
    useEffect(() => {
        AsyncStorage.getItem("userData").then(userData => setUserData(JSON.parse(userData)))
        AsyncStorage.getItem("goal").then(goal => setGoal(waterConverter(goal)))
    }, []);

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

	function handleOnAvatar() {
		setTextArray([`User: ${userData.firstName} ${userData.lastName}`, `Age: ${userData.age}`])
		setAdditionalButton(false)
        setModalVisible(true)
	}

    function handleOnEditGoalNavigation() {
        navigation.navigate("GoalSetting")
    }

    function handleOnInfo(){
        setTextArray([`Your Goal: ${goal}ml`])
        setAdditionalButton({ buttonTitle: "Edit", onPress: handleOnEditGoalNavigation })
        setModalVisible(true)
    }

	// Render
	return (
		<View style={styles.container}>
			<View style={styles.contentContainer}>
				<Avatar text={userData.firstName + " " + userData.lastName} onPress={handleOnAvatar} />
				<Calendar theme={calendarTheme} style={styles.calenderStyle} />
				<View style={{ flexDirection: "row" }}>
					<StatusBar completed={45} goal={goal} infoOnPress={handleOnInfo} />
				</View>

				<View style={styles.waterButtonsContainer}>
					<WaterButton title={"200ml"} />
					<WaterButton title={"500ml"} />
					<WaterButton title={"750ml"} />
					<WaterButton title={"1lt"} />
				</View>
				<CustomModal
					modalVisible={modalVisible}
					textArray={textArray}
                    additionalButton={additionalButton}
					setModalVisible={setModalVisible}
				/>
			</View>
		</View>
	)
}
