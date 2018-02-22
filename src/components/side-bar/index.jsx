import React from 'react';

import Icon from '../icon';

import './side-bar.css';

class SideBar extends React.Component {
  render = () => (
    <div className="SideBar">
      <div className="SideBar-brand">{this.props.brand}</div>
      <div className="SideBar-icons">
        {this.props.icons.map((icon, index) => (
          <div
            key={index}
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
}
export default SideBar;
