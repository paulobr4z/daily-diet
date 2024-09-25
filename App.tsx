/* eslint-disable camelcase */
import { ThemeProvider } from 'styled-components/native'
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'

import { defaultTheme } from './src/theme'

import { Routes } from './src/routes'
import { Loading } from './src/components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar style="auto" />
      {fontsLoaded
        ? <Routes />
        : <Loading />}
    </ThemeProvider>
  )
}
