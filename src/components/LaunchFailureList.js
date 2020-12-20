function LaunchFailureList({selectedLaunchPad, launchPadFailures}){
    return(
        <div className="lauchpad-failure-container" data-testid="lauchpad-failure-container">
            {
            launchPadFailures.all_failures && launchPadFailures.all_failures.length>0
            ?
            <div className="failure-message-container">
                <div className="failure-message">
                    <b>{selectedLaunchPad}</b> has failed {launchPadFailures.all_failures.length} times.
                </div>
                <div className="failure-list-container">
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
                </div>
            </div>
            :
            <div className="failure-message-container">
                <div className="failure-message">
                    <b>{selectedLaunchPad}</b> has no failure history.
                </div>
            </div>
            }
        </div>
    );
}
export default LaunchFailureList;