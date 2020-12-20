export const ADD_SATELLITES_LIST_SUCCESS = 'ADD_SATELLITES_LIST_SUCCESS';

export const fetchSatellitesListSuccess = satellites => {
    return {
    type: ADD_SATELLITES_LIST_SUCCESS,
    payload: { satellites }
  }
};