import { PropTypes } from 'prop-types';

import bookShape from './book';

const shelfRowShape = {
  author: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(bookShape),
};

export default shelfRowShape;
