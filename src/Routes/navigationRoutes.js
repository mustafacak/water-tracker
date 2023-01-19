//Navigations
import { NAVIGATION_SCREENS } from "./../Constants/navigationConstants"

//Components
import RegisterScreen from "@screens/Register/RegisterScreen"
import GoalSettingScreen from "@screens/GoalSetting/GoalSettingScreen"
import MainScreen from "@screens/Main/MainScreen"

export const navigationRoutes = [
	{
		name: NAVIGATION_SCREENS.REGISTER,
		component: RegisterScreen,
	},
	{
		name: NAVIGATION_SCREENS.GOAL,
		component: GoalSettingScreen,
	},
	{
		name: NAVIGATION_SCREENS.MAIN,
		component: MainScreen,
	},
]

export const loggedRoutes = [
    {
        name: NAVIGATION_SCREENS.MAIN,
        component: MainScreen,
    },
    {
		name: NAVIGATION_SCREENS.GOAL,
		component: GoalSettingScreen,
	}
]