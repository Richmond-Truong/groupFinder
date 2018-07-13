import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import TopBar from './topBar.js';

class SideBar extends Component{

    constructor(prop) {
      super(prop);
      this.open_side_bar = this.open_side_bar.bind(this)
      this.close_side_bar = this.close_side_bar.bind(this)
    }
  
    open_side_bar() {
      this.setState({width: '15%', minWidth:'200px'})
    }
  
    close_side_bar() {
      this.setState({width: '0%', minWidth:'0px'})
      
    }
  
    render() { 

      return [ 
      
      <div id="mySidenav" className="sidenav" style={this.state}  key="1">
        <button href="javascript:void(0)" className="closebtn" onClick={this.close_side_bar}> 
          &times;
        </button>
        <img className="logo" alt="" src={require('./../images/logo.png')}/> 
        <a href="#About" id="about">About</a>
        <a href="#Projects" id="projects">Projects</a>
        <a href="#Contact" id="contact">Contact</a> 
      </div>,
      <TopBar key='2'/>,
      <div key='3' style={{width:'0px', height:'0px'}}>
        <div className="sideNavButton" href="javascript:void(0)" key='3' onClick={this.open_side_bar}>&#9776;</div>
        <Link to='/' > <img className="homeButton" src={require('./../images/home.png')}></img> </Link>
      </div>
      ];
    }
}

// class TopBar extends Component{ 
//     render() { 
//       return ( 
//       <div className="topnav">
//         <a href="#Settings">Settings</a>
//         <a className="active">Username</a>
//       </div>
//       );
//     }
// }


export default SideBar;