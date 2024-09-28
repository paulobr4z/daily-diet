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
  feedback: {
    type: 'positive' | 'negative'
  }
  home: undefined;
  register: undefined;
  snack: undefined;
  statistics: {
    type: 'positive' | 'negative' | 'neutral'
  }
}

export type AppNavigatorRoutesProps = StackNavigationProp<AppRoutesProps>

const { Navigator, Screen } = createStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="register" component={Register} />

      <Screen name="feedback" component={Feedback} />

      <Screen name="home" component={Home} />

      <Screen name="snack" component={Snack} />

      <Screen name="statistics" component={Statistics} />
    </Navigator>
  )
}
