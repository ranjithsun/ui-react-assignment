import React, {useEffect ,useState} from 'react';
import { useQuery } from '@apollo/client';

import LaunchPadSelect from '../LaunchFailureComponents/LaunchPadSelect';
import LaunchFailureList from '../LaunchFailureComponents/LaunchFailureList';

import {LaunchpadContainer} from './launchfailure.style';

import {getLaunchPadsQuery} from '../../queries/queries';

function Launchfailures(){

    const [listOfLauchPads, setListOfLauchPads] = useState([]);
    const [selectedLaunchPad, setSelectedLaunchPad] = useState();
    const [showResult, setShowResult] = useState(false);

    const { data } = useQuery(getLaunchPadsQuery);

    useEffect(() => {
        if(data) setListOfLauchPads(data.allLaunchPads);
        return( ()=>setListOfLauchPads([]));
    }, [data]);

    const changeLaunchpad = (event)=>{
        setSelectedLaunchPad(event.target.value);
        event.target.value!=='' ? setShowResult(true) : setShowResult(false) ; 
    };
    
    return(
        <LaunchpadContainer>
           
            <LaunchPadSelect listOfLauchPads={listOfLauchPads} changeLaunchpad={changeLaunchpad} />
            {
                showResult === true &&
                <LaunchFailureList selectedLaunchPad={selectedLaunchPad}/>
            }
            
        </LaunchpadContainer>
    );
}

export default Launchfailures;