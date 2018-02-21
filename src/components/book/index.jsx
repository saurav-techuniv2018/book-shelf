import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import bookShape from '../../models/book';
import Icon from '../icon';
import actionGenerator from '../../redux/actions';
import httpRequest from '../../lib/data-fetch';
import './book.css';

class Book extends React.Component {
  static mapDispatchToProps = dispatch => ({
    toggleLike: (id, like, author) => {
      const url = `/books/${id}/${(like) ? 'like' : 'dislike'}`;
      httpRequest(url, 'POST')
        .then((data) => {
          if (data.statusCode === 204) {
            dispatch(actionGenerator('TOGGLE_LIKE', {
              id,
              like,
              author,
            }));
          }
        });
    },
  });

  constructor(props) {
    super(props);

    Book.propTypes = {
      book: bookShape.isRequired,
      toggleLike: PropTypes.func.isRequired,
    };
  }

  render = () => (
    <div className="Book">
      <img
        className="Book-image"
        src="https://images-na.ssl-images-amazon.com/images/I/51VNlzbfpXL._SX331_BO1,204,203,200_.jpg"
        alt="book-cover"
      />
      <div className="Book-data">
        <Icon
          className="Book-fav-icon"
          icon="&#xE87D;"
          style={(this.props.book.like) ? { color: 'red' } : { color: 'grey' }}
          onClick={() => this.props.toggleLike(
            this.props.book.id,
            !this.props.book.like,
            this.props.book.author,
          )}
        />
        <div className="Book-name" >{this.props.book.name}</div>
        <div className="Book-rating">{this.props.book.rating}</div>
        <div className="Book-author">{this.props.book.author}</div>
      </div>
    </div>
  );
}

export default connect(undefined, Book.mapDispatchToProps)(Book);
