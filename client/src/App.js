import React, { Component } from 'react';
import './App.css';



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
      <a href="javascript:void(0)" className="closebtn" onClick={this.close_side_bar}>&times;</a>
      <img className="logo" alt="" src={require('./images/logo.png')}/> 
      <a href="#About" id="about">About</a>
      <a href="#Projects" id="projects">Projects</a>
      <a href="#Contact" id="contact">Contact</a> 
    </div>,
    <TopBar/>,
    <div className="sideNavButton" href="javascript:void(0)" key="2" onClick={this.open_side_bar.bind(this)}>&#9776; open</div>,
    ];
  }
}

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

class HomePage extends Component{
  render() { 
    return [
      <SideBar key="1"/>, 
    ]
  }
}



export default HomePage; 
