import React from 'react';
import { PropTypes } from 'prop-types';

import Icon from '../icon';

import './side-bar.css';

const SideBar = props => (
  <div className="SideBar">
    <div className="SideBar-brand">{props.brand}</div>
    <div className="SideBar-icons">
      {props.icons.map(icon => (
        <div
          key={Math.random()}
          className="SideBar-icon"
        >
          <Icon
            icon={icon.icon}
            style={{
              fontSize: '32px',
            }}
          />
        </div>
      ))}
    </div>
  </div>
);

SideBar.propTypes = {
  brand: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string.isRequired,
  })).isRequired,
};

export default SideBar;
