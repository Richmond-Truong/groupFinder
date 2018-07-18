import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import './styles/barStyle.css'
import './styles/postStyle.css'
import './styles/loginWindow.css'
import UI from './scripts/UI';
import ProjectPage from './scripts/viewProjects';
import PostPage from './scripts/viewPost';
=======
import './styles/barStyle.css';
import './styles/postStyle.css';
import './styles/modalStyle.css';
import './semantic/dist/semantic.css'
import UI from './scripts/UI';
import Main from './scripts/main';
>>>>>>> 0e9b2064ff7c39eed6379db5d8c4d94ef7cfda35

class MainPage extends Component{
  render() { 
    return (
      <div>
        <UI/>
        <Main/>
      </div>
    )
  }
}

class App extends Component{
  render() { 
    return (
      <Switch> 
        <Route path='/' component={MainPage}/>
      </Switch> 
    )
  }
}





export default App; 
