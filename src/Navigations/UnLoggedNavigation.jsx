// React Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// Utils
import { navigationRoutes } from "../Routes/navigationRoutes"

export default function UnLoggedNavigation() {

	// Definition
	const Stack = createNativeStackNavigator()

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{navigationRoutes.map((item, index) => {
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
