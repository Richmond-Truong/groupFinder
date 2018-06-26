import React, { Component }  from 'react';
import TopBar from './topBar.js';

class SideBar extends Component{

    constructor(prop) {
      super(prop);
      this.open_side_bar = this.open_side_bar.bind(this)
      this.close_side_bar = this.close_side_bar.bind(this)
    }
  
    open_side_bar() {
      this.setState({width: '200px'})
    }
  
    close_side_bar() {
      this.setState({width: '0px'})
      
    }
  
    render() { 
      return [ 
      
      <div id="mySidenav" className="sidenav" style={this.state}  key="1">
        <button href="javascript:void(0)" className="closebtn" onClick={this.close_side_bar}> 
          &times;
        </button>
        <img className="logo" alt="" src={require('./images/logo.png')}/> 
        <a href="#About" id="about">About</a>
        <a href="#Projects" id="projects">Projects</a>
        <a href="#Contact" id="contact">Contact</a> 
      </div>,
      <TopBar/>,
      <div className="sideNavButton" href="javascript:void(0)" key="2" onClick={this.open_side_bar.bind(this)}>&#9776;</div>,
      ];
    }
  }

export default SideBar;