import {ADD_SATELLITES_LIST_SUCCESS} from './action';

export const initialState = {
    starlink_satellites: []
};

const satellitesReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_SATELLITES_LIST_SUCCESS:
        return {
            ...state,
            starlink_satellites: action.payload.satellites
        };
        default:
        return state;
    }
}

export default satellitesReducer;