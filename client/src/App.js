import React, { Component } from 'react';
import './App.css';
import './styles/barStyle.css'
import './styles/postStyle.css'
import UI from './scripts/UI';
import ProjectPage from './scripts/viewProjects';
import PostPage from './scripts/viewPost';


class HomePage extends Component{
  render() { 
    return [
      <UI key='1'/>, 
      <PostPage key='2' />
    ]
  }
}



export default HomePage; 
