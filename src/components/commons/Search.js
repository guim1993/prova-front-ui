import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form>
        <input onChange={this.props.handleSearch} className="search" type="search" name="search" placeholder="Encontre o filme que deseja" />
      </form>
    );
  }
}

export default Search;
