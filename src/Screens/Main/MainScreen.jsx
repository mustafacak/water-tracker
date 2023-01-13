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
import CustomButton from "@components/Common/CustomBotton/CustomButton"

export default function MainScreen({ navigation }) {
	// useState
	const [modalVisible, setModalVisible] = useState(false)
	const [textArray, setTextArray] = useState([])
	const [userData, setUserData] = useState({})
	const [goal, setGoal] = useState(0)
    const [additionalButton, setAdditionalButton] = useState(false)
    const [waterButtonOpacity, setWaterButtonOpacity] = useState([1, 1, 1, 1])
    const [waterButtonVolume, setWaterButtonVolume] = useState([])
    const [additiveWaterVolume, setAdditiveWaterVolume] = useState(0)

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
		setTextArray([`Welcome ${userData.firstName} ${userData.lastName} (${userData.age})`])
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

    function setWaterVol(vol, index){
        console.log(vol)
        console.log(index)


        let newOpacityArray = [...waterButtonOpacity]
        //let newVolumeArray = [...waterButtonVolume]

        if(newOpacityArray[index] === 1){
            newOpacityArray[index] = 0.5
            //newVolumeArray.push(vol)
            setAdditiveWaterVolume(additiveWaterVolume + vol)

        } else{
            setAdditiveWaterVolume(additiveWaterVolume - vol)
            newOpacityArray[index] = 1
            // const volumeArrayIndex = newVolumeArray.findIndex((element) => element === vol)
            // newVolumeArray.splice(volumeArrayIndex, 1)
            


        }

        //setWaterButtonVolume(newVolumeArray)
        setWaterButtonOpacity(newOpacityArray)

        console.log("waterButtonVolume:" + additiveWaterVolume)

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
					<WaterButton title={"200ml"} style={{ opacity: waterButtonOpacity[0]}} onPress={() => setWaterVol(200, 0)} />
					<WaterButton title={"500ml"} style={{ opacity: waterButtonOpacity[1]}} onPress={() => setWaterVol(500, 1)} />
					<WaterButton title={"750ml"} style={{ opacity: waterButtonOpacity[2]}} onPress={() => setWaterVol(750, 2)} />
					<WaterButton title={"1lt"} style={{ opacity: waterButtonOpacity[3]}} onPress={() => setWaterVol(1000, 3)} />
				</View>
                <CustomButton title={`+ Add ${additiveWaterVolume}ml`} disabled={additiveWaterVolume > 0 ? false : true} />
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
