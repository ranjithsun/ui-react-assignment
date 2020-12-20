import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import './App.css';

import Launchfailures from './components/LaunchFailures';
import StarlinkSatellites from './components/StarlinkSatellites';

function App() {

  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="header-title">SpaceX Assignment</div>
        </header>
        <section>
          <div className="content-section">
          <div className="sidenav">
              <NavLink activeClassName="active" to="/failed_launches">Failed Launches</NavLink>
              <NavLink activeClassName="active" to="/starlink_satellites">Starlink satellites</NavLink>
          </div>
          <div className="main">
            <Switch>
              <Route path="/failed_launches">
                <Launchfailures/>
              </Route>
              <Route path="/starlink_satellites">
                <StarlinkSatellites />
              </Route>
              <Route path="/">
                <Launchfailures/>
              </Route>
            </Switch>
          </div>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
