// import axios from "axios";
import { parse } from 'rss-to-json';

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

  return parse('https://news.google.com/rss/search?q=nba&hl=de&gl=DE&ceid=DE:de').then(
    rss => {
      console.log(JSON.stringify(rss, null, 3));
      return rss.items
    },
  );

  // return [
  //   {
  //     id: 4711,
  //     title: 'Mavs about to win 10 in a row',
  //     teaserText: 'Will they beat the Blazers on the road?',
  //   },
  //   {
  //     id: 4712,
  //     title: 'Rumours: Lakers about to trade LeBron?',
  //     teaserText: 'Experts: LaMelo to be the next LA superstar',
  //   },
  //   {
  //     id: 815,
  //     title: 'Kyrie boostered the 3rd time',
  //     teaserText: 'Irving looking forward to join the Nets on the home court',
  //   },
  // ]
}

export {
  getNews
}
