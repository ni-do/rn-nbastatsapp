import React from 'react';
import { Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 320,
  },
})

const Logo = ({ image, style }) => {
  return (
    <Image style={style || styles.logo} source={image} />
  )
}

export default Logo