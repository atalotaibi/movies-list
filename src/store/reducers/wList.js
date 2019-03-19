import * as actionTypes from "../actions/actionTypes";

const initialState = {
  watchedList: [],
  wCounter: 0,
  wFilter: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.WATCH:
      return {
        ...state,
        watchedList: state.watchedList.concat(action.payload),
        wFilter: state.watchedList.concat(action.payload),
        wCounter: state.wCounter + 1
      };
    case actionTypes.DELETE_FROM_WATCHED:
      return {
        ...state,
        watchedList: state.watchedList.filter(
          movie => movie !== action.payload
        ),
        wFilter: state.watchedList.filter(movie => movie !== action.payload),
        wCounter: state.wCounter - 1
      };
    case actionTypes.FILTER_FROM_WATCHED:
      let query = action.payload.toLowerCase();
      let filter = state.watchedList.filter(movie => {
        return movie.toLowerCase().includes(query);
      });
      return {
        ...state,
        wFilter: filter
      };
    default:
      return state;
  }
};
export default reducer;
