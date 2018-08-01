import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import './styles/barStyle.css';
import './styles/postStyle.css';
import './styles/modalStyle.css';
import './semantic/dist/semantic.css'
import './styles/Login.css';
import './styles/SignUp.css';
import './styles/createPost.css';
import UI from './scripts/UI';
import Main from './scripts/main';

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
