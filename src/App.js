import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import Header from './components/commons/Header';
import Footer from './components/commons/Footer';

import Home from './pages/Home';
import Film from './pages/Film';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <div className="main">
            <Switch>
              <Route exact path="/" component={() => <Home />} />
              <Route exact path="/film" component={() => <Film />} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
