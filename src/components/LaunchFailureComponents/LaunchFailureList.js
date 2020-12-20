import {LauchpadFailureContainer, FailureMessageContainer, FailureListContainer} from './launchfailure.style';

function LaunchFailureList({selectedLaunchPad, launchPadFailures}){
    return(
        <LauchpadFailureContainer data-testid="lauchpad-failure-container">
            {
            launchPadFailures.all_failures && launchPadFailures.all_failures.length>0
            ?
            <FailureMessageContainer>
                <div className="failure-message">
                    <b>{selectedLaunchPad}</b> has failed {launchPadFailures.all_failures.length} times.
                </div>
                <FailureListContainer>
                    <div className="failure-list-row title-row">
                        <div className="failure-list-column-one">S.No</div>
                        <div className="failure-list-column-two">Name of the Launch</div>
                        <div className="failure-list-column-three">Reason for Failure</div>
                    </div>
                    {
                    launchPadFailures.all_failures && launchPadFailures.all_failures.map(
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
                    <b>{selectedLaunchPad}</b> has no failure history.
                </div>
            </FailureMessageContainer>
            }
        </LauchpadFailureContainer>
    );
}
export default LaunchFailureList;