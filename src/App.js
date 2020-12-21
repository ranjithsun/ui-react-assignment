import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import SideNavComponent from './components/SideNavComponent';
import Launchfailures from './components/LaunchFailureComponents/LaunchFailures';
import StarlinkSatellites from './components/StarlinkSatellitesComponents/StarlinkSatellites';

import {Header, ContentSection} from './app.style';

//Setup Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
