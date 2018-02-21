import React from 'react';

import bookShape from '../../models/book';

class Book extends React.Component {
  constructor(props) {
    super(props);

    Book.propTypes = {
      book: bookShape.isRequired,
    };
  }

  render = () => (
    <div className="Book">
      <div className="Book-image-container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51VNlzbfpXL._SX331_BO1,204,203,200_.jpg"
          alt="book-cover"
        />
      </div>
      <div className="Book-data">
        <div>{this.props.book.name}</div>
        <div>{this.props.book.rating}</div>
        <div>{this.props.book.author}</div>
      </div>
    </div>
  );
}

export default Book;
