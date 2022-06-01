import React, { useState, useEffect, useCallback } from "react"
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Linking,
} from "react-native"
import { getTeams } from "../../data/Teams"
import TeamTile from "./TeamTile"
import { getNews } from "../../data/News"

const OpenURLText = ({ url, style, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Text style={style} onPress={handlePress}>{children}</Text>;
};

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
    maxHeight: 380,
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
                  <OpenURLText url={newsItem.link} style={styles.newsItemTeaserText}>{newsItem.description}</OpenURLText>
                </View>
              );
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
