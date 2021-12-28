import React from "react"
import { Text, View, StyleSheet } from "react-native"
import { format } from 'date-fns'

const styles = StyleSheet.create({
  gameDate: {
    fontSize: 18,
    textAlign: 'center',
  },
  teamNames: {
    textAlign: 'center',
  },
  gameResult: {
    fontSize: 24,
    textAlign: 'center',
  }
})

const GameCard = ({ game }) => {
  console.log('GameCard game:', game)

  const gameDate = new Date(game.date)
  const formattedGameDate = format(gameDate, 'dd.MM.yyyy')

  return (
    <View>
      <Text style={styles.gameDate}>{formattedGameDate}</Text>
      <Text style={styles.teamNames}>{game.home_team.name} - {game.visitor_team.name}</Text>
      <Text style={styles.gameResult}>{game.home_team_score} : {game.visitor_team_score}</Text>
    </View>
  )
}

export default GameCard
