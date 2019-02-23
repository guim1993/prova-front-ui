import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class FilmDetails extends Component {

  listChildrens(childrens) {
    if (!childrens) return;

    const childrensList = childrens.map((child, i) => {
      return <Link key={i} to="/people/1">{child.name}</Link>
    });
    
    return childrensList;
  }

  render() {
    const { film } = this.props;
    return (
      <div className="film-detail">
        <h1 className="film-title">{film.title}</h1>
        <ul className="film-infos">
          <li><span className="bold">Diretor:</span> {film.director}</li>
          <li><span className="bold">Produtos:</span> {film.producer}</li>
          <li><span className="bold">Data de lançamento:</span> {film.release_date}</li>
          <li className="sub-itens">
            <p className="bold">Atores:</p>
            {this.listChildrens(film.charactersDetails)}
          </li>
          <li className="sub-itens">
            <p className="bold">Planetas:</p>
            {this.listChildrens(film.planetsDetails)}
          </li>
          <li className="sub-itens">
            <p className="bold">Naves:</p>
            {this.listChildrens(film.starshipsDetails)}
          </li>
          <li className="sub-itens">
            <p className="bold">Veículos:</p>
            {this.listChildrens(film.vehiclesDetails)}
          </li>
          <li className="sub-itens">
            <p className="bold">Especies:</p>
            {this.listChildrens(film.speciesDetails)}
          </li>
        </ul>
      </div>
    );
  }
}

export default FilmDetails;
