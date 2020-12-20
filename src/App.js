import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import SideNavComponent from './components/SideNavComponent';
import Launchfailures from './components/LaunchFailureComponents/LaunchFailures';
import StarlinkSatellites from './components/StarlinkSatellitesComponents/StarlinkSatellites';

import {Header, ContentSection} from './app.style';

function App() {
  return (
    <Router>
      <div className="App">
        <Header>
          <div className="header-title">SpaceX Assignment</div>
        </Header>
        <section>
          <ContentSection>
            <SideNavComponent />
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
          </ContentSection>
        </section>
      </div>
    </Router>
  );
}

export default App;
