import {startGiphySearchAPI,startGiphyTrendingAPI} from "../api/giphy";

export const fetchGiphySuccess = (payload, offset) => {
  return { type: "FETCH_GIPHY_SUCCESS", payload, offset };
};

export const fetchGiphyInProgress = () => {
  return { type: "FETCH_IN_PROGRESS"};
};

// Redux-Thunk (Async Action)
export const startGiphyFetch = (offset, query) => (dispatch) => {
  startGiphySearchAPI(offset, query).then((items) => {
    dispatch(fetchGiphySuccess(items.data, offset));
  });
};


export const startGiphyTrendingFetch = (offset) => (dispatch) => {
  startGiphyTrendingAPI(offset).then((items) => {
    dispatch(fetchGiphySuccess(items.data, offset));
  });
};
