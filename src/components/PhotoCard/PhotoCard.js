import React from 'react';
import PropTypes from 'prop-types';
import css from './PhotoCard.module.css';

const PhotoCard = ({
  photo: { webformatURL, likes, views, comments, downloads, largeImageURL },
  handleClickOpenModal,
}) => {
  return (
    <li className={css.photoCard}>
      <img src={webformatURL} alt="img" />
      <div className={css.stats}>
        <p className={css.statsItem}>
          <i className="material-icons">thumb_up</i>
          {likes}
        </p>
        <p className={css.statsItem}>
          <i className="material-icons">visibility</i>
          {views}
        </p>
        <p className={css.statsItem}>
          <i className="material-icons">comment</i>
          {comments}
        </p>
        <p className={css.statsItem}>
          <i className="material-icons">cloud_download</i>
          {downloads}
        </p>
      </div>
      <div className="overlay">
        <button
          type="button"
          className={css.fullscreenButton}
          onClick={() => handleClickOpenModal(largeImageURL)}
        >
          <i className="material-icons">zoom_out_map</i>
        </button>
      </div>
    </li>
  );
};

PhotoCard.propTypes = {
  photo: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  handleClickOpenModal: PropTypes.func.isRequired,
};

export default PhotoCard;
