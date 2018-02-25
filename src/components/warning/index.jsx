import { PropTypes } from 'prop-types';
import React from 'react';

import Icon from '../icon';

import './warning.css';

const Warning = props => (
  <div className="Warning">
    <pre className="Warning-header">{props.value}</pre>
    <div className="Warning-refresh">
      <Icon
        onClick={() => props.onClick()}
        icon="&#xE5D5;"
        style={{
          fontSize: '64px',
          color: 'white',
        }}
      />
    </div>
  </div>
);

Warning.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Warning.defaultProps = {
  value: '',
};

export default Warning;
