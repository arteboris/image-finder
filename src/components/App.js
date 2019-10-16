import React, { Component } from 'react';
import Gallery from './Gallery/Gallery';
import SearchForm from './SearchForm/SearchForm';
import LoardMore from './LoardMore/LoardMore';
import Modal from './Modal/Modal';
import * as imagesAPI from '../services/api';
import css from './App.module.css';

export default class App extends Component {
  state = {
    inputValue: '',
    images: [],
    query: '',
    page: 1,
    isModalOpen: false,
    largeImageURL: '',
  };

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (query !== prevState.query) {
      this.resetPage();
    }
  }

  resetPage = () => {
    this.setState({ page: 1 });
  };

  fetchImages = query => {
    imagesAPI
      .fetchImages(query)
      .then(({ data }) => this.setState({ images: data.hits }))
      .catch(error => this.setState(error));
  };

  fetchImagesLoardMore = (query, page) => {
    imagesAPI
      .fetchImages(query, page)
      .then(({ data }) =>
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
        })),
      )
      .catch(error => this.setState(error));
  };

  handleQueryChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { inputValue } = this.state;
    this.setState({ query: inputValue }, () => {
      this.setState({ inputValue: '' });
      const { query } = this.state;
      this.fetchImages(query);
    });
  };

  handleClickLoardMore = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      () => {
        const { query, page } = this.state;
        this.fetchImagesLoardMore(query, page);
        window.scrollTo({
          top: 100,
          behavior: 'smooth',
        });
      },
    );
  };

  handleClickOpenModal = largeImage => {
    this.setState({ isModalOpen: true, largeImageURL: largeImage });
  };

  CloseModal = () => this.setState({ isModalOpen: false });

  render() {
    const { images, inputValue, isModalOpen, largeImageURL } = this.state;
    return (
      <div className={css.app}>
        <SearchForm
          onChange={this.handleQueryChange}
          onSubmit={this.handleSubmit}
          inputValue={inputValue}
        />
        {images.length > 0 && (
          <Gallery
            images={images}
            handleClickOpenModal={this.handleClickOpenModal}
          />
        )}
        <LoardMore onClick={this.handleClickLoardMore} />
        {isModalOpen && (
          <Modal CloseModal={this.CloseModal} largeImageURL={largeImageURL} />
        )}
      </div>
    );
  }
}
