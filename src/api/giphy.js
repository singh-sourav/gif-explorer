import { getGiphyURL,getGiphyTrendingURL } from "../constants/api";

export async function startGiphySearchAPI(offset, query) {
  const response = await fetch(getGiphyURL(offset, query));
  const json = response.json();
  return json;
}

export async function startGiphyTrendingAPI(offset) {
    const response = await fetch(getGiphyTrendingURL(offset));
    const json = response.json();
    return json;
  }
