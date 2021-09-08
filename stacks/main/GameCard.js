import React from "react"
import { Text, View } from "react-native"

const GameCard = ({ game }) => {
  console.log('GameCard game:', game)
  return (
    <View>
      <Text>{game.date}</Text>
      <Text>{game.home_team.name} - {game.visitor_team.name}</Text>
      <Text>{game.home_team_score} : {game.visitor_team_score}</Text>
    </View>
  )
}

export default GameCard
