import React, { Component } from 'react';
import './App.css';
import './styles/barStyle.css'
import './styles/postStyle.css'
import SideBar from './scripts/sideBars';
import Page from './scripts/posts';


class HomePage extends Component{
  render() { 
    return [
      <SideBar key='1'/>, 
      <Page key='2' />
    ]
  }
}



export default HomePage; 
