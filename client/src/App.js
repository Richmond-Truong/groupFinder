import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';


class SideBar extends Component{
  render() { 
    return (
    <div id="mySidenav" class="sidenav">
      <img class="logo" alt="" src={require('./images/logo.png')}/> 
      <a href="#About" id="about">About</a>
      <a href="#Projects" id="projects">Projects</a>
      <a href="#Contact" id="contact">Contact</a>
      
    </div>
    );
  }
}

class TopBar extends Component{ 
  render() { 
    return ( 
    <div class="topnav">
      <a class="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
    );
  }
}
const HomePage = [
  SideBar,
  TopBar
]

export default SideBar; 
