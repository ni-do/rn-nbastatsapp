// import axios from "axios";
import { parse } from 'rss-to-json';
import { decode } from 'html-entities'

// const options = {
//   method: 'GET',
//   url: 'https://www.balldontlie.io/api/v1/teams',
//   params: {page: '0'},
//   // headers: {'x-rapidapi-host': 'free-nba.p.rapidapi.com', 'x-rapidapi-key': 'undefined'}
// }

const getNews = ({maxAmountOfNews = 3} = {}) => {
  // console.log('fetching data with axios...')
  // return axios.request(options).then(function (response) {
  //   console.log('data fetched with axios...')
  //   const news = response.data
  //   return news
  // }).catch(function (error) {
  //   console.log('error while fetching data with axios...')
  //   console.error(error);
  // });

  return parse(
    'https://news.google.com/rss/search?q=nba&hl=de&gl=DE&ceid=DE:de',
  ).then(rss => {
    const filteredItems = rss.items.map(item => {
      const decodedDescription = decode(item.description);
      const relatedNewsItems = decodedDescription
        .split('</li><li>')
        .map(relatedNewsItem => {
          const relItemHref = relatedNewsItem.match(/<a href="([^"]*)"/)[1];
          const relNewsProviderName = relatedNewsItem.match(
            /<font color="#6f6f6f">(.*)<\/font>/,
          )[1];
          return {
            description: relatedNewsItem
              .replace(/<font color="#6f6f6f">.*<\/font>/, '')
              .replace(/<\/?[^>]+(>|$)/g, '')
              .replace(/\&nbsp;/g, ' '),
            href: relItemHref,
            provider: {
              name: relNewsProviderName,
            }
          };
        });

      return {
        ...item,
        description: decodedDescription
          .replace(/<\/?[^>]+(>|$)/g, '')
          .replace(/\&nbsp;/g, ' '),
        relatedNewsItems,
      };
    });
    return filteredItems.slice(0, maxAmountOfNews);
  });
};

export {getNews};
