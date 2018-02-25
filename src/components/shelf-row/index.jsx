import React from 'react';
import { PropTypes } from 'prop-types';

import shelfRowShape from '../../models/shelf';
import Book from '../book';

import './shelf-row.css';

const ShelfRow = props => (
  <div className="ShelfRow">
    <div className="ShelfRow-author">
      {props.group.author}
    </div>
    <div className="ShelfRow-books-container">
      <div className="ShelfRow-books">
        {props.group.books.map(book => (
          <Book
            key={book.id}
            book={book}
          />
        ))}
      </div>
    </div>

  </div>
);

ShelfRow.propTypes = {
  group: PropTypes.shape(shelfRowShape).isRequired,
};

export default ShelfRow;
