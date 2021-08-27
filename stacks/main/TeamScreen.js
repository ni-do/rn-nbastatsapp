import React from 'react'

import { View, Text } from 'react-native'
import Logo from './../../screens/Logo.js'

const TeamScreen = ({
  navigation,
  route
}) => {
  const { logo, title, estimated } = route.params
  return (
    <View>
      <Logo image={logo} />
      <Text>{title} { estimated ? `(${estimated})` : null }</Text>
    </View>
  )
}

export default TeamScreen

