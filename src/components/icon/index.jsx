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
      style={this.props.style}
    >
      <span >
        <i
          className="material-icons"
        >{this.props.icon}
        </i>
      </span>
    </div>
  );
}

export default Icon;
