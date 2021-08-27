import React from 'react';
import { Image, StyleSheet } from 'react-native'

const imagePath = './../assets/NBAStatsLogo.png'
const imageSrc = require(imagePath)

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 320,
  },
})

const Logo = (props) => {
  return (
    <Image style={styles.logo} source={imageSrc} />
  )
}

export default Logo