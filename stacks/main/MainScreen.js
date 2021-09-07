import React, { useState, useEffect } from "react"
import {
  ScrollView,
  StyleSheet,
} from "react-native"
import { getTeams } from "../../data/Teams"
import TeamTile from "./TeamTile"

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

const MainScreen = ({ navigation }) => {

  const [teams, setTeams] = useState([])

  useEffect(async () => {
    const teams = await getTeams()
    setTeams(teams)
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.buttonContainer}>
      {teams.length > 0 ? 
        teams.map((team) => {
        // console.log('team:', team)
        // console.log('team id:', team.id)
        // console.log('team full name:', team.full_name)
        return (
          <TeamTile 
            navigation={navigation}
            key={team.id}
            team={team}
          />
        )
      })
      : null
    }
    </ScrollView>
  )
}

export default MainScreen;
