import { StyleSheet } from "react-native"

import { COLOR } from "@configs/Enums"
 export const styles = StyleSheet.create({
     // Modal
     centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 5,
        padding: 8,
        margin: 5,
        paddingHorizontal:18,
        elevation: 2
      },
      buttonDefault:{
        backgroundColor: COLOR.BLUE
      },
      buttonClose: {
        backgroundColor: COLOR.ORANGE
      },
      textStyle: {
        color: COLOR.WHITE,
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
      },
      buttonContainer: {
        flexDirection: "row",
      }
})