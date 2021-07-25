const initialState = {
  items: [],
};

const giphy = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GIPHY_SUCCESS": {
      if (action.offset > 1) {
        return {
          items: [...state.items, ...action.payload],
        };
      } else {
        return {
          items: [...action.payload],
        };
      }
    }
    default:
      return state;
  }
};

export default giphy;
