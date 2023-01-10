import { StyleSheet } from "react-native"

// Utils
import { COLOR } from "@configs/Enums"

 export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 40,
        paddingLeft:12,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#bfbfbf",
		backgroundColor: COLOR.BACKGROUND_COLOR,
        marginBottom: 10,

    },
    textInput: {
        flex:1,
        color:"#FFF",
        fontSize: 16,
        paddingHorizontal:10,
        textAlign: "center",
        fontWeight: "600",
    }
})