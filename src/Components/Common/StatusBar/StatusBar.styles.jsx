import { StyleSheet } from "react-native"

import { COLOR } from "@configs/Enums"
export const styles = StyleSheet.create({
	text: { 
        fontWeight: "bold", 
        width: 100, 
        color: "#FFFFFF"
    },
	statusBar: {
		backgroundColor: COLOR.BACKGROUND_COLOR,
		//width: "100%",
        flex:8,
		borderRadius: 10,
		overflow: "hidden",
        marginVertical: 15
	},
	activeStatusBar: {
		backgroundColor: COLOR.TINT,
		borderRadius: 0,
		padding: 15,
	},
})
