import axios from "axios";
import Config from "react-native-config";

const options = {
  method: 'GET',
  url: Config.BALLDONTLIE_API_URL + Config.BALLDONTLIE_API_VERSION + Config.BALLDONTLIE_API_ENDPOINT_TEAMS, // 'https://api.balldontlie.io/v1/teams',
  params: {page: '0'},
  // headers: {'x-rapidapi-host': 'free-nba.p.rapidapi.com', 'x-rapidapi-key': 'undefined'}
  headers: {'Authorization': Config.BALLDONTLIE_API_KEY }
}

const getTeams = () => {
  console.log('fetching data with axios...')
  return axios.request(options).then(function (response) {
    console.log('data fetched with axios...')
    const teamsWithLogos = response.data["data"].map((team) => {
      let logo = null
      switch (team.name) {
        case 'Celtics':
          logo = require("./../assets/teamlogos/celtics.png")
          break
        case 'Warriors':
          logo = require("./../assets/teamlogos/warriors.png")
          break
        case '76ers':
          logo = require("./../assets/teamlogos/76ers.png")
          break
        case 'Lakers':
          logo = require("./../assets/teamlogos/lakers.png")
          break
        case 'Mavericks':
          logo = require("./../assets/teamlogos/mavericks.png")
          break  
        case 'Cavaliers':
          logo = require("./../assets/teamlogos/cavaliers.png")
          break
        case 'Hawks':
          logo = require("./../assets/teamlogos/hawks.png")
          break  
        case 'Nets':
          logo = require("./../assets/teamlogos/nets.png")
          break
        case 'Nuggets':
          logo = require("./../assets/teamlogos/nuggets.png")
          break
        case 'Pistons':
          logo = require("./../assets/teamlogos/pistons.png")
          break
        case 'Rockets':
          logo = require("./../assets/teamlogos/rockets.png")
          break
        case 'Pacers':
            logo = require("./../assets/teamlogos/pacers.png")
            break
        case 'Hornets':
          logo = require("./../assets/teamlogos/hornets.png")
          break
        case 'Bulls':
          logo = require("./../assets/teamlogos/bulls.png")
          break
        case 'Wizards':
        default:
          logo = require("./../assets/teamlogos/no_logo.png")
          break;
      }
      return {
        ...team,
        logo
      }
    })
    return teamsWithLogos
  }).catch(function (error) {
    console.log('error while fetching data with axios...')
    console.error(error);
  });
}

const getDetailedTeamInfo = (team) => {
  console.log('fetching data with axios...')
  return axios.request(
    {
      ...options,
      url: Config.BALLDONTLIE_API_URL + Config.BALLDONTLIE_API_VERSION + Config.BALLDONTLIE_API_ENDPOINT_TEAMS + `/${team.id}`,
      headers: {'Authorization': Config.BALLDONTLIE_API_KEY }
    }
  ).then((response) => {
    console.log('data fetched with axios...')
    const detailedTeamInfo = response.data
    console.log('detailed team info:', detailedTeamInfo)
    return detailedTeamInfo
  })
}

export {
  getTeams,
  getDetailedTeamInfo,
}
