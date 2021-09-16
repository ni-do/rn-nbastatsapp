import React, { useState } from 'react'
import { NativeModules } from 'react-native'
const { CalendarModule } = NativeModules;

import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import Logo from './../../screens/Logo.js'
import { getDetailedTeamInfo } from '../../data/Teams'
import { getLatestGameForTeam } from '../../data/Games.js'
import GameCard from './GameCard.js'

const styles = StyleSheet.create({
  teamInfo: {
    marginTop: 5,
    paddingHorizontal: 24,
    paddingTop: 3,
    paddingBottom: 5,
  },
  logo: {
    margin: 5,
    marginTop: 2,
  },
  moreTeamInfoList: {
    marginTop: 6,
    paddingHorizontal: 24,
    paddingTop: 3,
    paddingBottom: 5,
  },
})

const TeamScreen = ({
  navigation,
  route
}) => {
  const { team } = route.params
  const initialState = {
    moreTeamInfo: null,
    latestGame: null,
  }

  const [state, setState] = useState(initialState)

  const {moreTeamInfo, latestGame} = state

  const fetchMoreTeamInfos = async () => {
    const moreTeamInfo = await getDetailedTeamInfo(team)
    // console.log('detailedTeamInfo:', moreTeamInfo)
    setState({
      ...state,
      moreTeamInfo,
    })
  }

  const fetchLatestGameInfos = async () => {
    // TODO: implement
    const latestGame = await getLatestGameForTeam(team)
    //create pseudo calendar entry for game
    const eventName = `NBA Game: ${latestGame.home_team.name} - ${latestGame.visitor_team.name}`
    const location = `${latestGame.home_team.city}`
    CalendarModule.createCalendarEvent(eventName, location)
    CalendarModule.isWhatsAppInstalled(isWhatsAppInstalled => {
      console.log('whatsapp installed:', isWhatsAppInstalled)
    })
    setState({
      ...state,
      latestGame,
    })
  }

  return (
    <View>
      <View style={styles.teamInfo}>
        <Logo image={team.logo} style={styles.logo}/>
        <Text>
          {team.full_name} {team.estimated ? `(${team.estimated})` : null}
        </Text>
        <Text>Conference: {team.conference}</Text>
        <Text>{team.division} division</Text>
        <Button title="More information" onPress={fetchMoreTeamInfos} />
        <Button title="latest game result" onPress={fetchLatestGameInfos} />
      </View>
      {moreTeamInfo ?
        <FlatList
        contentContainerStyle={styles.moreTeamInfoList}
          data={Object.entries({
            ...moreTeamInfo,
          })}
          renderItem={({item}) => <Text>{item[0]}: {item[1]}</Text>}
        />
        : null
      }

      {
        latestGame
        ?
        <GameCard game={latestGame} />
        : null
      }
    </View>
  )
}

export default TeamScreen
