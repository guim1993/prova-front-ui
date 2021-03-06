import React, { Component } from 'react';

import Search from './Search';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="site-title">Prova Front UI</h1>
        <Search handleSearch={this.props.handleSearch} />
      </header>
    );
  }
}

export default Header;
