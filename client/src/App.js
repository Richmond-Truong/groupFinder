import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

class SideBar extends Component{
  render() { 
    return ( 
    <div id="mySidenav" class="sidenav">
      <img class="logo" src={require('./images/logo.png')} /> 
      <a href="#About" id="about">About</a>
      <a href="#Projects" id="projects">Projects</a>
      <a href="#Contact" id="contact">Contact</a>
      
    </div>
    )
  }
}
class test extends Component{ 

  render() { 
      return (
          <div className="App"> 
              <h1>Hi, Im a React App </h1> 
          </div>
      );  
      
  }
}

export default SideBar; 
