// React Native
import { StyleSheet } from "react-native"

// Utils
import { COLOR } from "@configs/Enums"
export const styles = StyleSheet.create({
	container: {
         width: "100%", 
         marginVertical: 15 
    },
	button: {
		height: 40,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		padding: 10,
		backgroundColor: COLOR.BLUE,
	},

	text: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
})
