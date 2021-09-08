import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://www.balldontlie.io/api/v1/games',
  params: {page: '0'},
  // headers: {'x-rapidapi-host': 'free-nba.p.rapidapi.com', 'x-rapidapi-key': 'undefined'}
}

const getGames = () => {
  console.log('fetching data with axios...')
  return axios.request(options).then(function (response) {
    console.log('data fetched with axios...')  
  }).catch(function (error) {
    console.log('error while fetching data with axios...')
    console.error(error);
  });
}

const getLatestGameForTeam = (team) => {
  console.log('fetching latest games with axios...')
  const currentYear = new Date().getFullYear()
  console.log('currentYear:', currentYear)
  return axios.request(
    {
      ...options,
      // url: `https://www.balldontlie.io/api/v1/teams/${team.id}`
      params: {
        ...options.params,
        team_ids: [team.id],
        per_page: 1,
        page: 200,
        season: [currentYear],
      }
    }
  ).then((response) => {
    console.log('latest games fetched with axios...')
    return response.data.data.pop()
  })
}

export {
  getGames,
  getLatestGameForTeam,
}
