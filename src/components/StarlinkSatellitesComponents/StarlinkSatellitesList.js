import {SatelliteList, NoDataContainer} from './starlinksatellites.style';

function StarlinkSatellitesList({filteredSatellites}){
    return(
        <SatelliteList data-testid="statellite-list">
            <div className="statellite-list-row title-row">
                <div className="statellite-list-column-one">S.No</div>
                <div className="statellite-list-column">Starlink Object Name</div>
                <div className="statellite-list-column">Starlink Object ID</div>
                <div className="statellite-list-column">Launch Date</div>
            </div>
            {
            filteredSatellites.length > 0 
            ?
            filteredSatellites.map(
                (satellites,index) => {
                    let classNameRow = ['statellite-list-row row-odd', 'statellite-list-row row-even'][index % 2];
                    return(
                        <div key={index} className={classNameRow}>
                            <div className="statellite-list-column-one">{index+1}</div>
                            <div className="statellite-list-column">{satellites.spaceTrack.OBJECT_NAME}</div>
                            <div className="statellite-list-column">{satellites.spaceTrack.OBJECT_ID}</div>
                            <div className="statellite-list-column">{satellites.spaceTrack.LAUNCH_DATE}</div>
                        </div>
                    )
                }
                )
            :
                <NoDataContainer>No data found for the given Date</NoDataContainer>
            }
        </SatelliteList>
    );
}

export default StarlinkSatellitesList;