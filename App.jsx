// React
import { useState, useEffect } from "react"

// React Native
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AsyncStorage from "@react-native-async-storage/async-storage"

// Component
import LoggedNavigation from "./src/Navigations/LoggedNavigation"
import UnLoggedNavigation from "./src/Navigations/UnLoggedNavigation"

export default function App() {
	// useState
	const [isLogin, setIsLogin] = useState(false)

	// useEffect
	async function checkFirstTimeLogginIn() {

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
				{isLogin ? (
					<LoggedNavigation />
				) : (
                   <UnLoggedNavigation />
				)}
		</NavigationContainer>
	)
}
