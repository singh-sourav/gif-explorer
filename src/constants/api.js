const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const BASE_URL =  process.env.REACT_APP_BASE_URL


/**
 * API for finding Trending GIFs
 * @param {*} offset 
 * @param {*} query 
 * @param {*} limit 
 */
export const getGiphyURL = function (
  offset = 0,
  query = "cheeseburgers",
  limit = 20
) {
  var url = `${BASE_URL}/v1/gifs/search?api_key=${API_KEY}&&q=${query}&&limit=${limit}&&offset=${offset}&&random_id=e826c9fc5c929e0d6c6d423841a282aa`;
  return url;
};

/**
 * API for searching GIFs by query
 * @param {*} offset 
 * @param {*} limit 
 */
export const getGiphyTrendingURL = function (
    offset = 0,
    limit = 20
  ) {
    var url = `${BASE_URL}/v1/gifs/trending?api_key=${API_KEY}&&limit=${limit}&&offset=${offset}&&random_id=e826c9fc5c929e0d6c6d423841a282aa`;
    return url;
  };

