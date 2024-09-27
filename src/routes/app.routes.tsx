import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack'

import { Feedback } from '../screens/Feedback'
import { Home } from '../screens/Home'
import { Register } from '../screens/Register'
import { Snack } from '../screens/Snack'
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
      <Screen name="home" component={Home} />

      <Screen name="feedback" component={Feedback} />

      <Screen name="register" component={Register} />

      <Screen name="snack" component={Snack} />

      <Screen name="statistics" component={Statistics} />
    </Navigator>
  )
}
