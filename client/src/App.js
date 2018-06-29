import React, { Component } from 'react';
import './App.css';
import './barStyle.css'
import './loginWindow.css'
import SideBar from './sideBars.js';
import LoginWindow from './loginWindow';


class HomePage extends Component{
  render() { 
    return [
      <SideBar key="1"/>, 
      <LoginWindow/>,
    ]
  }
}



export default HomePage; 
