// React Native
import { Text, View, TouchableOpacity } from "react-native"
import { Icon } from "@rneui/themed"

// Style
import { styles } from "./StatusBar.styles"
import { COLOR } from "@configs/Enums"

export default function StatusBar({ completed }) {
	return (
		<View style={styles.statusBar}>
			<View style={[styles.activeStatusBar, { width: completed + "%" }]}>
				<Text style={styles.text}>Completed %{completed}</Text>
			</View>
			
            <TouchableOpacity
				style={styles.infoButton}
			>
				<Icon
					name="info"
					type="material"
					size={18}
					color={COLOR.WHITE}
				/>
				<Text style={{ color: COLOR.WHITE, marginLeft: 5 }}>
					3000ml
				</Text>
			</TouchableOpacity>
		</View>
	)
}
