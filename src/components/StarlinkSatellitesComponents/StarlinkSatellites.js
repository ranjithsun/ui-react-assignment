import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import { getSatellitesList } from "../../services/fetchSatellites";
import StarlinkSatellitesList from '../StarlinkSatellitesComponents/StarlinkSatellitesList'
import StarlinkDatePicker from '../StarlinkSatellitesComponents/StarlinkDatePicker';
import {dateArray,monthArray,yearArray} from '../../constants/ConstantValues';

import {StatelliteListContainer} from './starlinksatellites.style';

function StarlinkSatellites(props){

    const [filteredSatellites,setFilteredSatellites] = useState([]);
    const [selecteddate,setSelecteddate] = useState({year:'',month:'',date:''});
    const [showMonth,setShowMonth] = useState(false);
    const [showDate,setShowDate] = useState(false);

    useEffect(()=>{ props.dispatch(getSatellitesList()); },[]);

    useEffect(()=>{ 
        let dateStr='';
        for (const value in selecteddate) {
            dateStr += (selecteddate[value] && dateStr) ? `-${selecteddate[value]}` : selecteddate[value];
        }
        let events = props.starlink_satellites.filter((e) => {
            return (e.spaceTrack.LAUNCH_DATE.indexOf(dateStr) !== -1)
        });
        setFilteredSatellites(events);
     },[props,selecteddate]);

     const filterSatellites = (e)=>{
         if(e.target.name==='year' && e.target.value===''){
            setSelecteddate({year:'',month:'',date:''});
            setShowMonth(false);
            setShowDate(false)
            return;
         }
         if(e.target.name==='month' && e.target.value===''){
            setSelecteddate({...selecteddate,month:'',date:''});
            setShowDate(false)
            return;
         }
         setSelecteddate({...selecteddate, [e.target.name]: e.target.value});
         e.target.name === 'year' && setShowMonth(true);
         e.target.name === 'month' && setShowDate(true);
     }

    return(
        <StatelliteListContainer>
            <StarlinkDatePicker 
                filterSatellites={filterSatellites} 
                yearArray={yearArray} 
                monthArray={monthArray} 
                dateArray={dateArray} 
                showMonth={showMonth} 
                showDate={showDate} />
            <StarlinkSatellitesList filteredSatellites={filteredSatellites}/>
        </StatelliteListContainer>
    );
}

const mapStateToProps = state => ({
    starlink_satellites: state.satellites.starlink_satellites,
  });

export default connect(mapStateToProps)(StarlinkSatellites);