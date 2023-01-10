// React Native
import { Text, TouchableOpacity } from "react-native"
import { Icon } from "@rneui/themed"

// Style
import { styles } from "./WaterButton.styles"

// Utils
import { COLOR } from "@configs/Enums"

export default function WaterButton({ title, onPress }) {
	return (
		<TouchableOpacity
			style={styles.container}
            onPress={onPress}
		>
			<Icon
				name="local-drink"
				type="material"
				size={25}
				color={COLOR.WHITE}
			/>
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	)
}
