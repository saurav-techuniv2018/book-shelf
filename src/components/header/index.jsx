import { PropTypes } from 'prop-types';
import React from 'react';

import './header.css';

const Header = props => (
  <div className="Header">
    <div>
      {props.before}<span className="Header-em">{props.value}</span>{props.after}
    </div>
    <hr className="Header-line" />
  </div>
);

Header.propTypes = {
  before: PropTypes.string,
  value: PropTypes.string,
  after: PropTypes.string,
};

Header.defaultProps = {
  before: '',
  value: '',
  after: '',
};

export default Header;
