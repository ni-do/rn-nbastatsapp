// const getTeams = () => [
//   {
//     "teamName": "lakers",
//     "title": "Lakers",
//     "logo": require("./../assets/teamlogos/lakers.png"),
//     "estimated": "1947"
//   },
//   {
//     "teamName": "mavericks",
//     "title": "Mavericks",
//     "logo": require("./../assets/teamlogos/mavericks.png"),
//     "estimated": "1980"
//   },
//   {
//     "teamName": "76ers",
//     "title": "76ers",
//     "logo": require("./../assets/teamlogos/76ers.png"),
//     "estimated": null
//   },
//   {
//     "teamName": "celtics",
//     "title": "Celtics",
//     "logo": require("./../assets/teamlogos/celtics.png"),
//     "estimated": null
//   },
//   {
//     "teamName": "warriors",
//     "title": "Warriors",
//     "logo": require("./../assets/teamlogos/warriors.png"),
//     "estimated": "1946"
//   },
//   {
//     "teamName": "cavaliers",
//     "title": "Cavaliers",
//     "logo": require("./../assets/teamlogos/cavaliers.png"),
//     "estimated": "1970"
//   },
// ]

import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://www.balldontlie.io/api/v1/teams',
  params: {page: '0'},
  // headers: {'x-rapidapi-host': 'free-nba.p.rapidapi.com', 'x-rapidapi-key': 'undefined'}
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
      url: `https://www.balldontlie.io/api/v1/teams/${team.id}`
    }
  ).then((response) => {
    console.log('data fetched with axios...')
    const detailedTeamInfo = response.data
    return detailedTeamInfo
  })
}

export {
  getTeams,
  getDetailedTeamInfo,
}
