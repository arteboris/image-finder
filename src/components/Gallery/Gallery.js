import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard/PhotoCard';
import css from './Gallery.module.css';

const Gallery = ({ images, handleClickOpenModal }) => {
  return (
    <ul className={css.gallery}>
      {images.map(elem => (
        <PhotoCard
          key={elem.id}
          photo={elem}
          handleClickOpenModal={handleClickOpenModal}
        />
      ))}
    </ul>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleClickOpenModal: PropTypes.func.isRequired,
};

export default Gallery;
