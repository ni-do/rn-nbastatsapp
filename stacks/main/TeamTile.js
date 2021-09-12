import React, { useEffect } from "react"
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import Logo from "../../screens/Logo"

const styles = StyleSheet.create({
  tinyLogo: {
    width: 120,
    height: 120,
  },
  teamButton: {
    margin: 5,
  }
})

const TeamTile = ({
  navigation,
  team,
}) => {
  // console.log('team:', team)
  return (
    <TouchableOpacity
      style={styles.teamButton}
      key={team.abbreviation}
      // title={team.full_name}
      onPress={() =>
        navigation.navigate('Team', {team})
      }
      onLongPress={() => {
        console.log('long press')
      }}>
      <Logo image={team.logo} style={styles.tinyLogo}/>
      <Text>{team.full_name}</Text>
    </TouchableOpacity>
  )
}

export default TeamTile
