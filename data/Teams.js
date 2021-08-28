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
    // console.log(response.data);
    return response.data["data"]
  }).catch(function (error) {
    console.log('error while fetching data with axios...')
    console.error(error);
  });
}

export default getTeams;
