import React, { Component } from 'react';
import './App.css';
import './styles/barStyle.css';
import './styles/postStyle.css';
import './styles/modalStyle.css';
import UI from './scripts/UI';
import Main from './scripts/main';


class App extends Component{
  render() { 
    return (
      <div>
        <UI/> 
        <Main/>
      </div>
    )
  }
}



export default App; 
