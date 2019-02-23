import React, { Component } from 'react';
import Requests from '../services/Requests';
import Films from '../components/Films';

class Home extends Component {

  constructor(props) {
    super(props);

    this.requests = new Requests();

    this.state = {
      films: []
    };
  }

  componentDidMount() {
    this.requests.getAllFilms().then(result => this.setState({
      films: result
    }));
  }

  render() {
    return (
      <React.Fragment>
        <Films films={this.state.films} />
      </React.Fragment>
    );
  }
}

export default Home;
