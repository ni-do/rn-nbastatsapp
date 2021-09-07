import React from 'react'

import { View, Text, Button } from 'react-native'
import Logo from './../../screens/Logo.js'
import { getDetailedTeamInfo } from '../../data/Teams'

const TeamScreen = ({
  navigation,
  route
}) => {
  const { team } = route.params

  const fetchMoreTeamInfos = async () => {
    const detailedTeamInfo = await getDetailedTeamInfo(team)
    console.log('detailedTeamInfo:', detailedTeamInfo)
  }

  const fetchLatestGameInfos = async () => {
    // TODO: implement
  }

  return (
    <View>
      <Logo image={team.logo} />
      <Text>{team.full_name} { team.estimated ? `(${team.estimated})` : null }</Text>
      <Text>Conference: {team.conference}</Text>
      <Text>{team.division} division</Text>
      <Button
        title='More information'
        onPress={fetchMoreTeamInfos}
      />
    </View>
  )
}

export default TeamScreen

