import React, { Component } from 'react';
import './App.css';
import './barStyle.css'
import './postStyle.css'
import SideBar from './sideBars.js';
import Page from './posts.js';


class HomePage extends Component{
  render() { 
    return [
      <SideBar key="1"/>, 
      <Page key='2'/>
    ]
  }
}



export default HomePage; 
