// React
import React from "react"

// React Native
import { Text, View, TouchableOpacity } from "react-native"
import { Icon } from "@rneui/themed"

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

export default function MainScreen({ navigation }) {
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

	// Render
	return (
		<View style={styles.container}>
			<View style={styles.contentContainer}>
                <Avatar text={"Hasan Çakmak"} />
				<Calendar theme={calendarTheme} style={styles.calenderStyle} />
				<View style={{ flexDirection: "row" }}>
					<StatusBar completed={29} />
					<TouchableOpacity
						style={{
							flex: 1,
							backgroundColor: COLOR.ORANGE,
							padding: 15,
							borderRadius: 10,
							marginVertical: 15,
							marginLeft: 10,
						}}
					>
						<Text
							style={{
								textAlign: "center",
								color: COLOR.WHITE,
								fontWeight: "bold",
							}}
						>
							3lt
						</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.waterButtonsContainer}>
					<WaterButton title={"200ml"} />
					<WaterButton title={"500ml"} />
					<WaterButton title={"750ml"} />
					<WaterButton title={"1lt"} />
				</View>
			</View>
		</View>
	)
}
