// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://www.balldontlie.io/api/v1/teams',
//   params: {page: '0'},
//   // headers: {'x-rapidapi-host': 'free-nba.p.rapidapi.com', 'x-rapidapi-key': 'undefined'}
// }

const getNews = () => {
  // console.log('fetching data with axios...')
  // return axios.request(options).then(function (response) {
  //   console.log('data fetched with axios...')
  //   const news = response.data
  //   return news
  // }).catch(function (error) {
  //   console.log('error while fetching data with axios...')
  //   console.error(error);
  // });
  return [
    {
      id: 4711,
      title: 'Mavs about to win 10 in a row',
      teaserText: 'Will they beat the Blazers on the road?',
    },
    {
      id: 4712,
      title: 'Rumours: Lakers about to trade LeBron?',
      teaserText: 'Experts: LaMelo to be the next LA superstar',
    },
  ]
}

export {
  getNews
}
