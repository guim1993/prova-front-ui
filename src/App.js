import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import Header from './components/commons/Header';
import Footer from './components/commons/Footer';

import Home from './pages/Home';
import Film from './pages/Film';
import NotFound from './pages/NotFound';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      search: ''
    };
  }

  handleSearch(event) {
    console.log(this.props);
    const { value } = event.currentTarget;
    if(value.length > 0 && value.length < 4) return false;
    this.setState({
      search: value
    })
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Header handleSearch={this.handleSearch} />
          <div className="main">
            <Switch>
              <Route exact path="/" component={() => <Home search={this.state.search} />} />
              <Route exact path="/film/:id" component={Film} />
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
