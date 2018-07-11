import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import './styles/barStyle.css';
import './styles/postStyle.css';
import './styles/loginStyle.css'
import UI from './scripts/UI';
import Main from './scripts/main';
import TopBar from './topBar';
import LoginPage from './scripts/login';

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
        <Route exact path='/' component={LoginPage}/>
        <Route path='/main' component={MainPage}/>
      </Switch> 
    )
  }
}





export default App; 
