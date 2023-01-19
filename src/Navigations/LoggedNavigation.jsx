// React Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// Utils
import { loggedRoutes } from "../Routes/navigationRoutes"

export default function LoggedNavigation() {

	// Definition
	const Stack = createNativeStackNavigator()

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{loggedRoutes.map((item, index) => {
				return (
					<Stack.Screen
						key={index}
						name={item?.name}
						component={item?.component}
					/>
				)
			})}
		</Stack.Navigator>
	)
}
