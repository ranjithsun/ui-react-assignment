import {LauchpadSelectWrapper} from './launchfailure.style';
function LaunchPadSelect({ changeLaunchpad, listOfLauchPads }){
    return(
        <LauchpadSelectWrapper>
            <div className="launchpad-label">List of Launchpads:</div>
            <select  data-testid="lauchPads" name="lauchPads" id="lauchPads" onChange={changeLaunchpad} className="launchpad-list">
                <option data-testid='' value='' >Select launchPad</option>
                {listOfLauchPads && listOfLauchPads.map(lauchPad => <option data-testid={lauchPad.id} value={lauchPad.id} key={lauchPad.id}>{lauchPad.launchpad}</option>)}
            </select>
        </LauchpadSelectWrapper>
    );
}

export default LaunchPadSelect;