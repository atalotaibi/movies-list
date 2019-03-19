import * as actionTypes from "./actionTypes";

export const add = input => {
  return {
    type: actionTypes.ADD,
    payload: input
  };
};
export const unwatch = data => {
  return {
    type: actionTypes.UNWATCH,
    payload: data
  };
};
export const deleteFromList = data => {
  return {
    type: actionTypes.DELETE_FROM_LIST,
    payload: data
  };
};
export const filterFromList = query => {
  return {
    type: actionTypes.FILTER_FROM_LIST,
    payload: query
  };
};
