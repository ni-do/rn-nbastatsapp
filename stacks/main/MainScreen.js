import React from "react"
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native"
import getTeams from "../../data/Teams"
import Logo from "../../screens/Logo"


const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    flex: 1,
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
  const teams = getTeams()
  return (
    <View style={styles.buttonContainer}>
      {
        teams.map((team) => {
          return (
            <TouchableOpacity
              style={styles.teamButton}
              key={team.teamName}
              title={team.title}
              onPress={() =>
                navigation.navigate('Team', team)
              }
            >
              <Logo image={team.logo} style={styles.tinyLogo}/>
              <Text>{team.title}</Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

export default MainScreen;
