import React from 'react';
import { Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  tinyLogo: {
    flex: 1,
  },
  logo: {
    flex: 1,
  },
})

const Logo = ({ image, style }) => {
  return (
    <Image style={style || styles.logo} source={image} />
  )
}

export default Logo