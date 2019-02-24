import React, { Component } from 'react';
import Requests from '../services/Requests';

import Loader from '../components/commons/Loader';

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
    const { search } = this.props;
    this.requests.getAllFilms(search).then(result => this.setState({
      films: result
    })).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <React.Fragment>
        <Films films={this.state.films} />
        {!this.state.films.results && <Loader />}
      </React.Fragment>
    );
  }
}

export default Home;
