import React from "react"
import { View, Button } from "react-native"

const MainScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="76ers"
        onPress={() =>
          navigation.navigate('Team', { teamName: '76ers' })
        }
      />
      <Button
        title="Lakers"
        onPress={() =>
          navigation.navigate('Team', { teamName: 'lakers' })
        }
      />
      <Button
        title="mavericks"
        onPress={() =>
          navigation.navigate('Team', { teamName: 'mavericks' })
        }
      />
    </View>
  )
}

export default MainScreen;
