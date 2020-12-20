import React, {useEffect ,useState} from 'react';

import FetchAPI from '../services/FetchServices';
import LaunchPadSelect from './LaunchPadSelect';
import LaunchFailureList from './LaunchFailureList';

import { LAUNCHPADFETCHURL, LAUNCHQUERYURL} from '../constants/ConstantValues';

function Launchfailures(){

    const [listOfLauchPads, setListOfLauchPads] = useState([]);
    const [failedLauchList, setFailedLauchList] = useState([]);
    const [launchPadFailures, setLaunchPadFailures] = useState([]);
    const [selectedLaunchPad, setSelectedLaunchPad] = useState();
    const [showResult, setShowResult] = useState(false);

    const launchQuery = {
        query:{
            success: false
        }
    };

    useEffect(() => {
        FetchAPI(LAUNCHPADFETCHURL)
        .then(items => {
            setListOfLauchPads(items);
        });
        return( ()=>setListOfLauchPads([]));
    }, []);

    const changeLaunchpad = (event)=>{
        setSelectedLaunchPad(event.target.options[event.target.selectedIndex].text);
        launchQuery.query.launchpad = event.target.value;
        FetchAPI(LAUNCHQUERYURL, launchQuery, 'POST')
        .then(items => {
            setFailedLauchList(items);
        });
        event.target.value!=='' ? setShowResult(true) : setShowResult(false) ; 
    };

    useEffect(()=>{
        const launchPadFailList = [];
        if(failedLauchList && failedLauchList.docs){
            const failedLaunches = failedLauchList.docs.reduce(function (failures, launch) {
                failures.push({name:launch.name, failures: [launch.failures[0].reason]});
                return failures;
            }, launchPadFailList);
            setLaunchPadFailures({launchpad: selectedLaunchPad, all_failures:failedLaunches});
        }
    },[failedLauchList, selectedLaunchPad]);
    
    return(
        <div className="launchpad-container">
           
            <LaunchPadSelect listOfLauchPads={listOfLauchPads} changeLaunchpad={changeLaunchpad} />
            {
                showResult === true &&
                <LaunchFailureList launchPadFailures={launchPadFailures} selectedLaunchPad={selectedLaunchPad}/>
            }
            
        </div>
    );
}

export default Launchfailures;