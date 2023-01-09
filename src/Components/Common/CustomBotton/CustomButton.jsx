// React Native 
import { TouchableOpacity, Text, View } from "react-native"

// Style
import { styles } from "./CustomButton.styles"
export default function CustomButton({ title, onPress}) {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}