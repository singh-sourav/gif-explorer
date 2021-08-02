const initialState = {
  newItemsAdded:[]
};

const giphy = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GIPHY_SUCCESS": {
        return {
          newItemsAdded:[...action.payload]
        };
    }
    default:
      return state;
  }
};

export default giphy;
