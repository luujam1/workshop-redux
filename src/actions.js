const loadItem = require('./api');
const createAction = require('redux-actions').createAction;

// Create constants for action names
const ADD_ITEM = 'ADD_ITEM';
const TOGGLE_ITEM = 'TOGGLE_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const REQUEST_ITEM = 'REQUEST_ITEM';
const RECEIVE_ITEM = 'RECEIVE_ITEM';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// Possible values of the visibility filter
const visibilityFilters = { SHOW_ALL: 'SHOW_ALL', SHOW_INCOMPLETE: 'SHOW_INCOMPLETE' };

// Action creators
function addItem (text) {
  return { type: ADD_ITEM, payload: text };
}

function toggleItem (index) {
  return { type: TOGGLE_ITEM, payload: index };
}

function removeItem (index) {
  return { type: REMOVE_ITEM, payload: index };
}

function setVisibilityFilter (filter) {
  return { type: SET_VISIBILITY_FILTER, payload: filter };
}

function requestItem () {
  return function (dispatch) {
    let promise = loadItem();
    dispatch({ type: REQUEST_ITEM, payload: promise });

    return promise;
  };
}

module.exports = {
  ADD_ITEM,
  TOGGLE_ITEM,
  REMOVE_ITEM,
  REQUEST_ITEM,
  RECEIVE_ITEM,
  SET_VISIBILITY_FILTER,
  visibilityFilters,

  addItem,
  toggleItem,
  removeItem,
  requestItem,
  setVisibilityFilter: createAction(SET_VISIBILITY_FILTER)
};
