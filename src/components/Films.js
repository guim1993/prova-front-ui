import React, { Component } from 'react';
import Film from './Film';

class Films extends Component {

  filmsList() {

    const { films } = this.props;

    if (!films.results) {
      return false;
    }

    if (films.count === 0) {
      return <li>Nenhum filme encontrado</li>
    }

    const filmsList = films.results.map((film, i) => {
      return <Film key={i} film={film} />
    });
    return filmsList;
  }

  render() {
    return (
      <ul className="films-list">
        {this.filmsList()}
      </ul>
    );
  }
}

export default Films;
