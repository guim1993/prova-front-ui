import React, { Component } from 'react';

class FilmImage extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="image-container">
        <img className="img-big" src="../images/cover-b.png" alt={title} />
      </div>
    );
  }
}

export default FilmImage;
