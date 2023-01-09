// React Native
import { Text, View } from "react-native"

// Style
import { styles } from "@styles/App/App.styles"

// Navigation
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// Component
import RegisterScreen from "@screens/Register/RegisterScreen"

const Stack = createNativeStackNavigator()

function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }

export default function App() {
	return (
		<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
                    <Stack.Screen name="Register" component={RegisterScreen} />
					<Stack.Screen name="Home" component={HomeScreen} />
				</Stack.Navigator>
		</NavigationContainer>
	)
}
