import FetchAPI from '../services/FetchServices';
import {fetchSatellitesListSuccess} from '../redux/action';
import {STARLINKSATELLITEURL} from '../constants/ConstantValues';


export const getSatellitesList = () => {
    return dispatch => {
        FetchAPI(STARLINKSATELLITEURL)
        .then(response => {
            dispatch(fetchSatellitesListSuccess(response));
            return response;
        }).catch(error => console.log(error));
    }
};