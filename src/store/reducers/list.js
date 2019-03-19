import * as actionTypes from "../actions/actionTypes";

const initialState = {
  watchList: [],
  lCounter: 0,
  lFilter: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        watchList: state.watchList.concat(action.payload),
        lFilter: [action.payload, ...state.watchList], // to let the last movie added to be in the top
        lCounter: state.lCounter + 1
      };
    case actionTypes.UNWATCH:
      return {
        ...state,
        watchList: state.watchList.concat(action.payload),
        lFilter: state.watchList.concat(action.payload),
        lCounter: state.lCounter + 1
      };
    case actionTypes.DELETE_FROM_LIST:
      return {
        ...state,
        watchList: state.watchList.filter(movie => movie !== action.payload),
        lFilter: state.watchList.filter(movie => movie !== action.payload),
        lCounter: state.lCounter - 1
      };
    case actionTypes.FILTER_FROM_LIST:
      let query = action.payload.toLowerCase();
      let filter = state.watchList.filter(movie => {
        return movie.toLowerCase().includes(query);
      });
      console.log(filter);
      return {
        ...state,
        lFilter: filter
      };
    default:
      return state;
  }
};
export default reducer;
