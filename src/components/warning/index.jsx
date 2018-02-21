import { PropTypes } from 'prop-types';
import React from 'react';

class Warning extends React.Component {
  constructor(props) {
    super(props);

    Warning.propTypes = {
      value: PropTypes.string,
      onClick: PropTypes.func.isRequired,
    };

    Warning.defaultProps = {
      value: '',
    };
  }

  render = () => (
    <div className="Warning">
      <pre>{this.props.value}</pre>
      <Icon
        onClick={() => this.props.onClick()}
        icon="&#xE5D5;"
      />
    </div>
  )
}
