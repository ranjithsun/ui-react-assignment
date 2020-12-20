import { NavLink } from "react-router-dom";
import {SideNav} from './sidenavcomponent.style';

function SideNavComponent(){
    return(
        <SideNav>
            <NavLink activeClassName="active" to="/failed_launches">Failed Launches</NavLink>
            <NavLink activeClassName="active" to="/starlink_satellites">Starlink satellites</NavLink>
        </SideNav>
    );
}

export default SideNavComponent;