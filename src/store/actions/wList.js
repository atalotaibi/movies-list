import * as actionTypes from "./actionTypes";

export const watch = data => {
  return {
    type: actionTypes.WATCH,
    payload: data
  };
};
export const deleteFromWatched = data => {
  return {
    type: actionTypes.DELETE_FROM_WATCHED,
    payload: data
  };
};
export const filterFromWatched = data => {
  return {
    type: actionTypes.FILTER_FROM_WATCHED,
    payload: data
  };
};
