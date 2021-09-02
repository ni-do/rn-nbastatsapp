import React, { useState, useEffect } from "react"
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native"
import getTeams from "../../data/Teams"
import Logo from "../../screens/Logo"


const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tinyLogo: {
    width: 120,
    height: 120,
  },
  teamButton: {
    margin: 5,
  }
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
          <TouchableOpacity
            style={styles.teamButton}
            key={team.abbreviation}
            // title={team.full_name}
            onPress={() =>
              navigation.navigate('Team', team)
            }
            onLongPress={() => {
              console.log('long press')
            }}
          >
            <Logo image={team.logo} style={styles.tinyLogo}/>
            <Text>{team.full_name}</Text>
          </TouchableOpacity>
        )
      })
      : null
    }
    </ScrollView>
  )
}

export default MainScreen;
