import { PropTypes } from 'prop-types';
import React from 'react';

import Icon from '../icon';

import './warning.css';

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
      <pre className="Warning-header">{this.props.value}</pre>
      <div className="Warning-refresh">
        <Icon
          onClick={() => this.props.onClick()}
          icon="&#xE5D5;"
          style={{
            fontSize: '64px',
            color: 'white',
          }}
        />
      </div>
    </div>
  )
}

export default Warning;
