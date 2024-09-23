/* eslint-disable camelcase */
import { ThemeProvider } from 'styled-components/native'
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'

import theme from './src/theme'

import { Home } from './src/screens/Home'
import { Loading } from './src/components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      {fontsLoaded
        ? <Home />
        : <Loading />}
    </ThemeProvider>
  )
}
