// React Native 
import { TouchableOpacity, Text, View } from "react-native"

// Style
import { styles } from "./CustomButton.styles"
export default function CustomButton({ title, onPress, color, disabled}) {

    return(
        <View style={styles.container}>
            <TouchableOpacity disabled={disabled ? disabled : false} onPress={onPress} style={[styles.button, color ? {backgroundColor: color} : disabled ? { opacity: 0.5 } : null]}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}