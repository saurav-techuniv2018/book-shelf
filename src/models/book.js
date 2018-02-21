import { PropTypes } from 'prop-types';

const bookShape = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  rating: PropTypes.number,
  author: PropTypes.string,
});

export default bookShape;
