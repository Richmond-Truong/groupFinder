import React, { Component } from 'react';
import './App.css';
import SideBar from './sideBars.js';


class HomePage extends Component{
  render() { 
    return [
      <SideBar key="1"/>, 
    ]
  }
}



export default HomePage; 
