import React from 'react';
import { PropTypes } from 'prop-types';

class Icon extends React.Component {
  constructor(props) {
    super(props);

    Icon.propTypes = {
      icon: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      style: PropTypes.object,
    };

    Icon.defaultProps = {
      style: {},
    };
  }

  render = () => (
    <div
      className="MaterialIcon-container"
      onClick={() => this.props.onClick()}
      onKeyPress={() => this.props.onClick()}
      role="button"
      tabIndex={0}
    >
      <i
        className="material-icons"
        style={this.props.style}
      >{this.props.icon}
      </i>
    </div>
  );
}

export default Icon;
