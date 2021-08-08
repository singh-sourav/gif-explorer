const initialState = {
  newItemsAdded:[],
  loading:true
};

const giphy = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GIPHY_SUCCESS": {
        return {
          newItemsAdded:[...action.payload],
          loading:false
        };
    }
    case "FETCH_IN_PROGRESS":{
      return {
        ...state,
        loading :true
      }
    }
    default:
      return state;
  }
};

export default giphy;
