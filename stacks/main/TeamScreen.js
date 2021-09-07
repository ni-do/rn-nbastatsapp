import React from 'react'

import { View, Text } from 'react-native'
import Logo from './../../screens/Logo.js'

const TeamScreen = ({
  navigation,
  route
}) => {
  const { team } = route.params
  return (
    <View>
      <Logo image={team.logo} />
      <Text>{team.full_name} { team.estimated ? `(${team.estimated})` : null }</Text>
      <Text>Conference: {team.conference}</Text>
      <Text>{team.division} division</Text>
    </View>
  )
}

export default TeamScreen

