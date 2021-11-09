import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import { SplashScreen } from './src/screens/SplashScreen'
import { Home } from './src/screens/Home'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/styles'
import {
  useFonts,
  SourceSansPro_700Bold,
  SourceSansPro_600SemiBold,
  SourceSansPro_400Regular,
  SourceSansPro_900Black,
} from '@expo-google-fonts/source-sans-pro'
import AppLoading from 'expo-app-loading'
import { Routes } from './src/routes'

export default function App() {
  let [fontsLoaded] = useFonts({
    SourceSansPro_700Bold,
    SourceSansPro_600SemiBold,
    SourceSansPro_400Regular,
    SourceSansPro_900Black,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  )
}
