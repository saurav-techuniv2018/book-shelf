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

  render = () => (
    <div className="Book">
      <img
        className="Book-image"
        src="//s1.ticketm.net/img/tat/dam/a/f2c/b6495b49-6898-4015-9a7c-7155c91b3f2c_132301_CUSTOM.jpg"
        alt="book-cover"
      />
      <div className="Book-data">
        <Icon
          className="Book-fav-icon"
          icon="&#xE87D;"
          style={{
            paddingTop: '4px',
            color: '#fff',
          }}
          containerStyle={{
            textAlign: 'center',
            display: 'inline-block',
            position: 'relative',
            top: '-24px',
            left: '80%',
            padding: '8px',
            width: '32px',
            height: '32px',
            borderRadius: '32px',
            alignContent: 'center',
            backgroundColor: (this.props.book.like) ? '#E41912' : 'grey',
            boxShadow: '-1px 1px 2px black',
            cursor: 'pointer',
          }}
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

Book.propTypes = {
  book: bookShape.isRequired,
  toggleLike: PropTypes.func.isRequired,
};

export default connect(undefined, Book.mapDispatchToProps)(Book);
