import React, { Component }  from 'react';

class TopBar extends Component{ 
      render() { 
        return ( 
        <div className="topnav">
          <a href="#Settings">Settings</a>
          <a className="active">Username</a>
        </div>
        );
      }
}

export default TopBar;