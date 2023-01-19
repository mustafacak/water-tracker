// React
import { useState, useEffect } from "react"

// React Native
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AsyncStorage from "@react-native-async-storage/async-storage"

// Component
import RegisterScreen from "@screens/Register/RegisterScreen"
import GoalSettingScreen from "@screens/GoalSetting/GoalSettingScreen"
import MainScreen from "@screens/Main/MainScreen"
import {navigationRoutes} from "./src/Routes/navigationRoutes"

export default function App() {
	// useState
	const [isLogin, setIsLogin] = useState(false)

	// useEffect
	async function checkFirstTimeLogginIn() {
		//checkUserLoggedIn
		try {
			const data = await AsyncStorage.getItem("userData")
			setIsLogin(data)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		checkFirstTimeLogginIn()
	}, [isLogin])

	// Definition
	const Stack = createNativeStackNavigator()

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{isLogin ? (
					<>
						<Stack.Screen
							name="MainScreen"
							component={MainScreen}
						/>
						<Stack.Screen name="GoalSettingScreen" component={GoalSettingScreen} />
					</>
				) : (
					<>
						{navigationRoutes.map((item, index) => {
							return (
								<Stack.Screen
									key={index}
									name={item?.name}
									component={item?.component}
								/>
							)
						})}

						{/* <Stack.Screen
							name="Register"
							component={RegisterScreen}
						/>
						<Stack.Screen name="Goal" component={GoalScreen} />
						<Stack.Screen
							name="Dashboard"
							component={DashboardScreen}
						/> */}
					</>
				)}
			</Stack.Navigator>


				{/* <Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
                    <Stack.Screen name="Register" component={RegisterScreen} />
					<Stack.Screen name="GoalSetting" component={GoalSettingScreen} />
					<Stack.Screen name="Main" component={MainScreen} />
				</Stack.Navigator> */}
		</NavigationContainer>
	)
}
