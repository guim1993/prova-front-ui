import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div className="not-fount">
        <p className="bold">A página que você procura não existe</p>
        <Link className="back-page" to="/">Voltar</Link>
      </div>
    );
  }
}

export default NotFound;
