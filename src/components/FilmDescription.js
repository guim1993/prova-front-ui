import React, { Component } from 'react';

class FilmDescription extends Component {
  render() {
    const { description } = this.props;
    return (
      <div className="film-description">
        <p className="bold">Descrição</p>
        <p>{description}</p>
      </div>
    );
  }
}

export default FilmDescription;
