import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { Statistics } from '../screens/Statistics'

type AppRoutesProps = {
  feedback: undefined;
  home: undefined;
  register: undefined;
  snack: undefined;
  statistics: undefined;
}

export type AppNavigatorRoutesProps = StackNavigationProp<AppRoutesProps>

const { Navigator, Screen } = createStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />

      <Screen name="statistics" component={Statistics} />
    </Navigator>
  )
}
