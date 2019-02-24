class Requests {

    constructor(){
        this.API = `https://swapi.co/api`;
    }

    getAllFilms(search) {
      const query = search.length > 0 ? `?search=${search}` : '';
        return new Promise((resolve, reject) => {
            fetch(`${this.API}/films${query}`)
                .then(response => response.json()
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                }));
        });
    }
    
    getFilm(idFilm) {
        return new Promise((resolve, reject) => {
            fetch(`${this.API}/films/${idFilm}`)
                .then(response => response.json()
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                }));
        });
    }

    getGenericEndpoint(endpoint) {
        return new Promise((resolve, reject) => {
            fetch(endpoint)
                .then(response => response.json()
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject(error);
                }));
        });
    }

}

export default Requests;
