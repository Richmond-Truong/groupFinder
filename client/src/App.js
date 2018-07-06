import React, { Component } from 'react';
import './App.css';
import './styles/barStyle.css'
import './styles/postStyle.css'
import UI from './scripts/UI';
import ProjectPage from './scripts/viewProjects';
import PostPage from './scripts/viewPost';
import './barStyle.css'
import './loginWindow.css'
import SideBar from './sideBars.js';


class HomePage extends Component{
  render() { 
    return [
      <UI key='1'/>, 
      <PostPage key='2' />
    ]
  }
}



export default HomePage; 
