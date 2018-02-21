import React from 'react';
import { PropTypes } from 'prop-types';

import shelfShape from '../../models/shelf';
import ShelfRow from '../shelf-row';

class Shelf extends React.Component {
  constructor(props) {
    super(props);

    Shelf.propTypes = {
      groups: PropTypes.arrayOf(PropTypes.shape(shelfShape)).isRequired,
    };
  }

  render = () => (
    <div className="Shelf">
      {this.props.groups.map(group => (
        <ShelfRow
          key={group.author}
          group={group}
        />
      ))}
    </div>
  )
}

export default Shelf;
