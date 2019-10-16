import React from 'react';
import PropTypes from 'prop-types';
import css from './SearchForm.module.css';

const SearchForm = ({ onChange, onSubmit, inputValue }) => {
  return (
    <>
      <form className={css.searchForm} onSubmit={onSubmit}>
        <input
          name="inputValue"
          onChange={onChange}
          type="text"
          autoComplete="off"
          placeholder="Search images..."
          value={inputValue}
        />
      </form>
    </>
  );
};

SearchForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default SearchForm;
