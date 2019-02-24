import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      search: ''
    };
  }

  handleSearch(event) {
    const { value } = event.currentTarget;
    if(value.length > 0 && value.length < 4) return false;
    this.props.history.push("/");
    this.props.handleSearch(value);
  }

  render() {
    return (
      <form>
        <input onChange={this.handleSearch} className="search" type="search" name="search" placeholder="Encontre o filme que deseja" />
      </form>
    );
  }
}

export default withRouter(Search);
