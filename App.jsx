// React Native
import { Text, View } from "react-native"

// Style
import { styles } from "@styles/App/App.styles"

// Navigation
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// Component
import RegisterScreen from "@screens/Register/RegisterScreen"
import GoalSettingScreen from "@screens/GoalSetting/GoalSettingScreen"
import MainScreen from "@screens/Main/MainScreen"

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
                    <Stack.Screen name="Register" component={RegisterScreen} />
					<Stack.Screen name="GoalSetting" component={GoalSettingScreen} />
					<Stack.Screen name="Main" component={MainScreen} />
				</Stack.Navigator>
		</NavigationContainer>
	)
}
