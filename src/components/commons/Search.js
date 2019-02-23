import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form>
        <input className="search" type="search" name="search" placeholder="Find your movie" />
      </form>
    );
  }
}

export default Search;
