import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export default class Modal extends Component {
  overlayRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeypress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeypress);
  }

  handleKeypress = e => {
    if (e.code !== 'Escape') return;
    this.props.CloseModal();
  };

  handleOverlayClick = e => {
    const { current } = this.overlayRef;
    if (current && e.target !== current) {
      return;
    }
    this.props.CloseModal();
  };

  handleCloseClick = () => {
    this.props.CloseModal();
  };

  render() {
    const { largeImageURL } = this.props;
    return (
      <div
        className={css.overlay}
        ref={this.overlayRef}
        onClick={this.handleOverlayClick}
        role="presentation"
      >
        <div className={css.modal}>
          <img src={largeImageURL} alt="img" className={css.modalImg} />
        </div>
        <button
          type="button"
          className={css.modalButton}
          data-action="close-modal"
          onClick={this.handleCloseClick}
        >
          <i className="material-icons">close</i>
        </button>
      </div>
    );
  }
}

Modal.propTypes = {
  CloseModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
