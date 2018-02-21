import { PropTypes } from 'prop-types';
import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

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
  }

  render = () => (
    <div className="Header">
      {this.props.before}<span className="Header-em">{this.props.value}</span>{this.props.after}
    </div>
  )
}

export default Header;
