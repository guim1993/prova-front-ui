import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class Film extends Component {
  render() {
    const { film } = this.props;
    const date = new Date(film.release_date);
    return (
      <li className="film-item">
        <Link to={`/film/${film.episode_id}`}>
          <img className="film-img" src="images/cover.png" alt={film.title} />
          <div className="see-more">
            <p>Clique para ver mais informações</p>
          </div>
        </Link>
        <p className="bold">{film.title}</p>
        <p>{new Intl.DateTimeFormat('pt-BR').format(date)}</p>
      </li>
    );
  }
}

export default Film;
