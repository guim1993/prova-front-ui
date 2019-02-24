import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class Film extends Component {
  render() {
    const { film } = this.props;
    const date = new Date(film.release_date);
    film.id = film.url.replace(/\D/g, '');
    return (
      <li className="film-item">
        <Link className="film-item-link" to={`/film/${film.id}`}>
          <img className="film-item-img" src="images/cover.png" alt={film.title} />
          <div className="film-item-more">
            <p>Clique para ver mais informações</p>
          </div>
        </Link>
        <p className="film-item-title bold">{film.title}</p>
        <p className="film-item-date">{new Intl.DateTimeFormat('pt-BR').format(date)}</p>
      </li>
    );
  }
}

export default Film;
