import React from "react";
import Logo from './../../screens/Logo.js'

const TeamScreen = ({
  navigation,
  route
}) => {
  const { teamName } = route.params
  switch (teamName) {
    case '76ers':
      return (<Logo image={require('./../../assets/teamlogos/76ers.png')}/>)
    case 'lakers':
      return (<Logo image={require('./../../assets/teamlogos/lakers.png')}/>)
    case 'mavericks':
      return (<Logo image={require('./../../assets/teamlogos/mavericks.png')}/>)
    default:
      return null
  }
}

export default TeamScreen;
