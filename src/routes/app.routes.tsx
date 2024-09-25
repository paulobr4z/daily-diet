import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { Statistics } from '../screens/Statistics'

const { Navigator, Screen } = createStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="Home"
        component={Home}
      />

      <Screen
        name="statistics"
        component={Statistics}
      />
    </Navigator>
  )
}
