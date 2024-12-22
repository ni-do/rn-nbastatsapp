/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  // useColorScheme,
  View,
} from 'react-native';
import MainStack from './stacks/main/MainStack.js';
import Logo from './screens/Logo.js'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
  },
  splashScreenLogoContainer: {
    backgroundColor: Colors.white,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  }
});

const Section = ({children, title}) => {
  // const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Logo image={require("./assets/NBAStatsLogo_small.png")}/>
    </View>
  );
};

const NbaStatsApp = () => {
  const [state, setState] = useState({
    isSplashScreenEnabled: true,
  })

  const {
    isSplashScreenEnabled
  } = state

  useEffect(() => {
    setTimeout(() => {
      setState({
        ...state,
        isSplashScreenEnabled: false,
      })
    }, 1500)
  }, [])

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  }

  if(isSplashScreenEnabled) {
    return (
      <SafeAreaView style={backgroundStyle} contentContainerStyle={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
        <StatusBar barStyle={'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View style={styles.splashScreenLogoContainer}>
            <Section title="App Logo" style={styles.sectionTitle} />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }

  return (
    <NavigationContainer
      onReady={() => {
        console.log('navigation container ready')
      }}
    >
      {/* <GestureHandlerRootView> */}
      <MainStack />
    {/* </GestureHandlerRootView> */}
    </NavigationContainer>
  )
}

export default NbaStatsApp;
