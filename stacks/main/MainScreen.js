import React from "react"
import { View, Button } from "react-native"
import getTeams from "../../data/Teams"

const MainScreen = ({ navigation }) => {
  const teams = getTeams()
  // const teams = JSON.parse(teamsJSON)
  return (
    <View>
      {
        teams.map((team) => {
          return (
            <Button
              key={team.teamName}
              title={team.title}
              onPress={() =>
                navigation.navigate('Team', team)
              }
            />
          )
        })
      }
    </View>
  )
}

export default MainScreen;
