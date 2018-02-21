import React from 'react';

import bookShape from '../../models/book';
import Icon from '../icon';

import './book.css';

class Book extends React.Component {
  constructor(props) {
    super(props);

    Book.propTypes = {
      book: bookShape.isRequired,
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
          onClick={() => this.props.toggleLike()}
        />
        <div className="Book-name" >{this.props.book.name}</div>
        <div className="Book-rating">{this.props.book.rating}</div>
        <div className="Book-author">{this.props.book.author}</div>
      </div>
    </div>
  );
}

export default Book;
