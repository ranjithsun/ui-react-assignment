function LaunchPadSelect({ changeLaunchpad, listOfLauchPads }){
    return(
        <div className="lauchpad-select-wrapper">
            <div className="launchpad-label">List of Launchpads:</div>
            <select  data-testid="lauchPads" name="lauchPads" id="lauchPads" onChange={changeLaunchpad} className="launchpad-list">
                <option data-testid='' value='' >Select launchPad</option>
                {listOfLauchPads.map(lauchPad => <option data-testid={lauchPad.id} value={lauchPad.id} key={lauchPad.id}>{lauchPad.name}</option>)}
            </select>
        </div>
    );
}

export default LaunchPadSelect;