// React Native
import { Text, View } from "react-native"

// Style
import { styles } from "./StatusBar.styles"

export default function StatusBar({ completed }) {
	return (
		<View style={styles.statusBar}>
			<View style={[styles.activeStatusBar, { width: completed + "%" }]}>
				<Text style={styles.text}>
					Completed %{completed}
				</Text>
			</View>
		</View>
	)
}
