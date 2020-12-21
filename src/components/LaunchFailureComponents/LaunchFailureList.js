import React, {useEffect ,useState} from 'react';
import { useQuery } from '@apollo/client';

import {LauchpadFailureContainer, FailureMessageContainer, FailureListContainer} from './launchfailure.style';
import {getFailedlauchesQuery} from '../../queries/queries';

function LaunchFailureList({selectedLaunchPad}){

    const [failedLauchList, setFailedLauchList] = useState([]);

    const { loading, data } = useQuery(getFailedlauchesQuery, {variables:{id:selectedLaunchPad}});

    useEffect(()=>{
        if(data) setFailedLauchList(data.launchPadFailures);
    },[failedLauchList, selectedLaunchPad, data]);

    if (loading) 
        return <LauchpadFailureContainer>
                <FailureMessageContainer>
                    <div className="failure-message">Loading...</div>
                </FailureMessageContainer>
            </LauchpadFailureContainer>;

    return(
        <LauchpadFailureContainer data-testid="lauchpad-failure-container">
            {
            failedLauchList.all_failures && failedLauchList.all_failures.length>0
            ?
            <FailureMessageContainer>
                <div className="failure-message">
                    <b>{failedLauchList.launchpad}</b> has failed {failedLauchList.all_failures.length} times.
                </div>
                <FailureListContainer>
                    <div className="failure-list-row title-row">
                        <div className="failure-list-column-one">S.No</div>
                        <div className="failure-list-column-two">Name of the Launch</div>
                        <div className="failure-list-column-three">Reason for Failure</div>
                    </div>
                    {
                    failedLauchList.all_failures && failedLauchList.all_failures.map(
                        (launchPadFail,index) => {
                            let classNameRow = ['failure-list-row row-odd', 'failure-list-row row-even'][index % 2];
                            return(
                                <div key={index} className={classNameRow}>
                                    <div className="failure-list-column-one">{index+1}</div>
                                    <div className="failure-list-column-two">{launchPadFail.name}</div>
                                    <div className="failure-list-column-three">{launchPadFail.failures}</div>
                                </div>
                            )
                        }
                    )
                    }
                </FailureListContainer>
            </FailureMessageContainer>
            :
            <FailureMessageContainer>
                <div className="failure-message">
                    <b>{failedLauchList.launchpad}</b> has no failure history.
                </div>
            </FailureMessageContainer>
            }
        </LauchpadFailureContainer>
    );
}
export default LaunchFailureList;