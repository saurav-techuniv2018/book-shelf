import React from 'react';

import shelfRowShape from '../../models/shelf';
import Book from '../book';

class ShelfRow extends React.Component {
  constructor(props) {
    super(props);

    ShelfRow.propTypes = {
      group: shelfRowShape.isRequired,
    };
  }

  render = () => (
    <div className="Shelf">
      <div className="Shelf-author">
        {this.props.group.author}
      </div>
      <div className="Shelf-books">
        {this.props.group.books.map(book => (
          <Book
            key={book.id}
            book={book}
          />
          ))}
      </div>

    </div>
  )
}

export default ShelfRow;
