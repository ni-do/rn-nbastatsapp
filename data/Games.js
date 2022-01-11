import axios from "axios";
const { compareAsc, format} = require('date-fns')

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
  const today = new Date()
  const currentYear = today.getFullYear()
  const params = {
    ...options.params,
    team_ids: [team.id],
    per_page: 100,
    page: 1,
    seasons: [currentYear-1, currentYear],
    end_date: format(today, 'yyyy-MM-dd'),
  }
  // console.log('params:', params)

  return axios.request(
    {
      ...options,
      // url: `https://www.balldontlie.io/api/v1/teams/${team.id}`
      params,
    }
  ).then((response) => {
    console.log('latest games fetched with axios...')
    console.log('response.data:', response.data)
    const latestGamesDesc = response.data.data.sort((firstElem, secElem) => {
      const firstGameDate = new Date(firstElem.date)
      const secGameDate = new Date(secElem.date)
      return compareAsc(firstGameDate, secGameDate)
    })
    return response.data.data.pop()
  })
}

export {
  getGames,
  getLatestGameForTeam,
}
