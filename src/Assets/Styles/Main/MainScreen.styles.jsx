import { StyleSheet } from "react-native"

// Utils
import { COLOR } from "@configs/Enums"

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLOR.BACKGROUND_COLOR,
		padding: 15,
		paddingTop: 30,
	},
	contentContainer: {
		flex: 1,
		backgroundColor: "#80808054",
		borderRadius: 15,
		padding: 25,
		marginBottom: 25,
	},
	title: {
		fontSize: 25,
		fontWeight: "bold",
		color: "#FFFFFF",
		marginBottom: 35,
	},
	calenderStyle: { 
        borderRadius: 15, 
        padding: 10 
    },
    waterButtonsContainer: {
        flexDirection: "row",
        padding: 10,
        justifyContent: "center",
    }
})
