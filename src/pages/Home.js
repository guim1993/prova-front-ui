import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="films-list">
          <li className="film-item">
            <Link to="/film/1">
              <img src="images/cover.png" alt="Nome do Filme" />
            </Link>
            <p className="bold">Nome do Filme</p>
            <p>Ano de lançamento</p>
          </li>
          <li className="film-item">
            <Link to="/film/1">
              <img src="images/cover.png" alt="Nome do Filme" />
            </Link>
            <p className="bold">Nome do Filme</p>
            <p>Ano de lançamento</p>
          </li>
          <li className="film-item">
            <Link to="/film/1">
              <img src="images/cover.png" alt="Nome do Filme" />
            </Link>
            <p className="bold">Nome do Filme</p>
            <p>Ano de lançamento</p>
          </li>
          <li className="film-item">
            <Link to="/film/1">
              <img src="images/cover.png" alt="Nome do Filme" />
            </Link>
            <p className="bold">Nome do Filme</p>
            <p>Ano de lançamento</p>
          </li>
          <li className="film-item">
            <Link to="/film/1">
              <img src="images/cover.png" alt="Nome do Filme" />
            </Link>
            <p className="bold">Nome do Filme</p>
            <p>Ano de lançamento</p>
          </li>
          <li className="film-item">
            <Link to="/film/1">
              <img src="images/cover.png" alt="Nome do Filme" />
            </Link>
            <p className="bold">Nome do Filme</p>
            <p>Ano de lançamento</p>
          </li>
          <li className="film-item">
            <Link to="/film/1">
              <img src="images/cover.png" alt="Nome do Filme" />
            </Link>
            <p className="bold">Nome do Filme</p>
            <p>Ano de lançamento</p>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Home;
