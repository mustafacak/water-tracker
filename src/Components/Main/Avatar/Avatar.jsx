// React Native
import { Text, View, TouchableOpacity } from "react-native"

// Style
import { styles } from "./Avatar.styles"
export default function Avatar({ text, onPress }) {

    function createAvatarText(text){
        let arr = text.split(" ")
        let nick = arr[0].charAt(0).toUpperCase() + arr[1].charAt(0).toUpperCase()
        return <Text>{nick}</Text>
    }

	return (
		<View style={{ alignItems: "flex-end" }}>
			<TouchableOpacity
				style={styles.container}
                onPress={onPress}
			>
				<Text style={styles.text}>
					{createAvatarText(text)}
				</Text>
			</TouchableOpacity>
		</View>
	)
}
