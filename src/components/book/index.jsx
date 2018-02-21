import React from 'react';

class Book extends React.Component {
  constructor(props) {
    super(props);

    this.book = {
      id: 2,
      name: 'Harry Potter',
      author: 'JK Rowling',
      rating: 3,
      like: false,
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
        <div>{this.book.name}</div>
        <div>{this.book.rating}</div>
        <div>{this.book.author}</div>
      </div>
    </div>
  );
}

export default Book;
