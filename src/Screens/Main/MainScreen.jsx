// React
import React, { useState, useEffect } from "react"

// React Native
import { Text, View } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useIsFocused } from "@react-navigation/native"

// Style
import { styles } from "@styles/Main/MainScreen.styles"

// Library
import { Calendar } from "react-native-calendars"

// Config
import { COLOR } from "@configs/Enums"

// Utils
import waterConverter from "../../Utils/waterConverter"
import { todayFormattedDate } from "../../Utils/dateHelper"

// Component
import WaterButton from "@components/Main/WaterButton/WaterButton"
import StatusBar from "@components/Common/StatusBar/StatusBar"
import Avatar from "@components/Main/Avatar/Avatar"
import CustomModal from "@components/Modal/CustomModal"
import CustomButton from "@components/Common/CustomBotton/CustomButton"
import DayComponent from "@components/Main/DayComponent/DayComponent"

export default function MainScreen({ navigation }) {
	// useState
	const [modalVisible, setModalVisible] = useState(false)
	const [textArray, setTextArray] = useState([])
	const [userData, setUserData] = useState({})
	const [goal, setGoal] = useState(0)
	const [additionalButton, setAdditionalButton] = useState(false)
	const [waterButtonOpacity, setWaterButtonOpacity] = useState([1, 1, 1, 1])
	const [additiveWaterVolume, setAdditiveWaterVolume] = useState(0)
	const [consumedWater, setConsumedWater] = useState(0)
	const [statusPercentage, setStatusPercentage] = useState(0)
	const [markedDates, setMarkedDates] = useState({})

    const today = todayFormattedDate()
    const isFocused = useIsFocused()
	// useEffect
	useEffect(() => {
		AsyncStorage.getItem("userData").then((userData) =>
			setUserData(JSON.parse(userData)),
		)
		AsyncStorage.getItem("goal").then((goal) =>
			setGoal(waterConverter(goal)),
		)

        AsyncStorage.getItem("markedDates").then((dates) =>
			console.log("marked dates", JSON.parse(dates),
            setMarkedDates(JSON.parse(dates))
		))
		//AsyncStorage.clear()
	}, [isFocused])

    useEffect(() => {
        AsyncStorage.getItem(today).then((dailyConsumed) => {

			if (dailyConsumed !== null) {
				setConsumedWater(parseInt(dailyConsumed))
                setStatusPercentage(Math.ceil((parseInt(dailyConsumed) / goal) * 100))
			} else{
                setConsumedWater(0)
            }

		})
    }, [goal])

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

	// Function
	function handleOnAvatar() {
		setTextArray([
			`Welcome ${userData.firstName} ${userData.lastName} (${userData.age})`,
		])
		setAdditionalButton(false)
		setModalVisible(true)
	}

	function handleOnEditGoalNavigation() {
        setModalVisible(false)
		navigation.navigate("GoalSettingScreen")
	}

	function handleOnInfo() {
		setTextArray([`Your Goal: ${goal}ml`])
		setAdditionalButton({
			buttonTitle: "Edit",
			onPress: handleOnEditGoalNavigation,
		})
		setModalVisible(true)
	}

	function setWaterVol(vol, index) {
		let newOpacityArray = [...waterButtonOpacity]

		if (newOpacityArray[index] === 1) {
			newOpacityArray[index] = 0.5 // TODO Opacity değerlerini Enum'a çek
			setAdditiveWaterVolume(additiveWaterVolume + vol)
		} else {
			setAdditiveWaterVolume(additiveWaterVolume - vol)
			newOpacityArray[index] = 1
		}
		setWaterButtonOpacity(newOpacityArray)
	}

	function handleOnAddWater() {
        if(goal !== 0){
            let consumedVolume = consumedWater
            consumedVolume = consumedVolume + additiveWaterVolume
            setConsumedWater(consumedVolume)
            setStatusPercentage(Math.ceil((consumedVolume / goal) * 100))
    
            // reset buttons
            setAdditiveWaterVolume(0)
            setWaterButtonOpacity([1, 1, 1, 1])
    
            AsyncStorage.setItem(today, `${consumedVolume}`)
    
            if (consumedVolume >= goal) {
                
                let copyOfmarkedDates = markedDates ? markedDates : {}
                copyOfmarkedDates[today] = {}
                //console.log("copyofMarked:", copyOfmarkedDates)
                setMarkedDates(copyOfmarkedDates)
                AsyncStorage.setItem(
                    "markedDates",
                    JSON.stringify(copyOfmarkedDates),
                )
            }
        } else{
            setTextArray([`You must enter goal`])
            setAdditionalButton({
                buttonTitle: "Add Goal",
                onPress: handleOnEditGoalNavigation,
            })
            setModalVisible(true)
        }
		
	}

	// Render
	return (
		<View style={styles.container}>
			<View style={styles.contentContainer}>
				<Avatar
					text={`${userData?.firstName} ${userData?.lastName}`}
					onPress={handleOnAvatar}
				/>
				<Calendar
					theme={calendarTheme}
					style={styles.calenderStyle}
					markingType={"custom"}
					markedDates={markedDates}
					dayComponent={DayComponent}
				/>
				<View style={styles.statusBarContainer}>
					<StatusBar
						amount={consumedWater}
						completed={statusPercentage}
						goal={goal}
						infoOnPress={handleOnInfo}
					/>
				</View>

				<View style={styles.waterButtonsContainer}>
					<WaterButton
						title={"200ml"}
						style={{ opacity: waterButtonOpacity[0] }}
						onPress={() => setWaterVol(200, 0)}
					/>
					<WaterButton
						title={"500ml"}
						style={{ opacity: waterButtonOpacity[1] }}
						onPress={() => setWaterVol(500, 1)}
					/>
					<WaterButton
						title={"750ml"}
						style={{ opacity: waterButtonOpacity[2] }}
						onPress={() => setWaterVol(750, 2)}
					/>
					<WaterButton
						title={"1lt"}
						style={{ opacity: waterButtonOpacity[3] }}
						onPress={() => setWaterVol(1000, 3)}
					/>
				</View>
				<CustomButton
					title={`+ Add ${additiveWaterVolume}ml`}
					disabled={additiveWaterVolume > 0 ? false : true}
					onPress={handleOnAddWater} 
				/>
				<CustomModal
					modalVisible={modalVisible}
					setModalVisible={setModalVisible}
					textArray={textArray}
					additionalButton={additionalButton}
				/>
			</View>
		</View>
	)
}
