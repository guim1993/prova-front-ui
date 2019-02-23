import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Requests from '../services/Requests';

import Loader from '../components/commons/Loader';

import FilmImage from '../components/FilmImage';
import FilmDetails from '../components/FilmDetails';
import FilmDescription from '../components/FilmDescription';

class Film extends Component {

  constructor(props) {
    super(props);

    this.requests = new Requests();

    this.state = {
      film: []
    };
  }

  getAllChildren(urls) {
    const promises = urls.map(endpoint => {
      return this.requests.getGenericEndpoint(endpoint);
    });

    return Promise.all(promises).then(response => {
      return response;
    }).catch(response => {
      return response;
    });
  }

  componentDidMount() {

    if (!this.props.match || !this.props.match.params) return false;

    const { id } = this.props.match.params;

    this.requests.getFilm(id).then(async (result) => {

       const film = result;
       film.charactersDetails = await this.getAllChildren(result.characters);
       film.planetsDetails = await this.getAllChildren(result.planets);
       film.starshipsDetails = await this.getAllChildren(result.starships);
       film.vehiclesDetails = await this.getAllChildren(result.vehicles);
       film.speciesDetails = await this.getAllChildren(result.species);
       return film;

    }).then(film => this.setState({ film }));
  }

  render() {
    const { film } = this.state;
    film.release_date = film.release_date ? new Intl.DateTimeFormat().format(new Date(film.release_date)) : '';
    
    return (
      <React.Fragment>
        <section className="film-detail">
          <FilmImage title={film.title} />
          <FilmDetails film={film} />
          <FilmDescription description={film.opening_crawl} />
          <Link className="back-page" to="/">Voltar</Link>
        </section>

        {!this.state.film.title && <Loader />}

      </React.Fragment>
    );
  }
}

export default Film;
