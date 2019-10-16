import React from 'react';
import PropTypes from 'prop-types';
import css from './LoardMore.module.css';

const LoardMore = ({ onClick }) => {
  return (
    <button type="button" className={css.button} onClick={onClick}>
      LoardMore
    </button>
  );
};

LoardMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoardMore;
