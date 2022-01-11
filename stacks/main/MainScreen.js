import React, { useState, useEffect } from "react"
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
} from "react-native"
import { getTeams } from "../../data/Teams"
import TeamTile from "./TeamTile"
import { getNews } from "../../data/News"

const styles = StyleSheet.create({
  tilesContainer: {
    justifyContent: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  newsContainer: {
    // justifyContent: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxHeight: 120,
  },
  newsItemTitle: {
    fontWeight: 'bold',
  },
  newsItemTeaserText: {
    fontStyle: 'italic',
  },
})

const MainScreen = ({ navigation }) => {

  const [teams, setTeams] = useState([])
  const [news, setNews] = useState([])

  useEffect(async () => {
    const news = await getNews()
    setNews(news)
  }, [])

  useEffect(async () => {
    const teams = await getTeams()
    setTeams(teams)
  }, [])

  return (
    <ScrollView>
      <Text>Latest News</Text>
      <ScrollView contentContainerStyle={styles.newsContainer}>
        {news.length > 0 ? 
          news.map((newsItem) => {
            return (
              <View>
              <Text style={styles.newsItemTitle}>{newsItem.title}</Text> 
              <Text style={styles.newsItemTeaserText}>{newsItem.teaserText}</Text> 
            </View>
            )
          })
          : null
        }
      </ScrollView>
      <ScrollView contentContainerStyle={styles.tilesContainer}>
        <Text>Choose A Team</Text>
        {teams.length > 0 ? 
          teams.map((team) => {
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
  </ScrollView>
  )
}

export default MainScreen;
