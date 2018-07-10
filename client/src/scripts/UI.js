import React, { Component }  from 'react';
import Modal from 'react-modal';
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
      <div style={{width:'0px', height:'0px'}}>
        <div className="sideNavButton" href="javascript:void(0)" key='3' onClick={this.open_side_bar}>&#9776;</div>
        <img class="homeButton" src={require('./../images/home.png')}/>
      </div>
      ];
    }
}

class TopBar extends Component{ 
  constructor(props) {
    super(props);
    this.state = { 
      modalOn : false,
      username: '',
      password: '' 
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  

  /*
    Function used to open the modal window
  */
  openModal() {
    this.setState({modalOn : true});
  }

  /*
    Function used to close the modal window
  */
  closeModal() {
    this.setState({modalOn : false});
  }

  /*
    Function used update the username and password state whenever there 
    is an entry to the text boxes
  */
  handleInputChange(event){
      const target = event.target;
      const name = event.target.name;
      this.setState({[name]: target.value})
  }

  /*
    Function used to test the submit button
  */
  handleSubmit(event) {
      alert('Username: ' + this.state.username + ' Password: ' + this.state.password);
      event.preventDefault();
  }

  render() { 
        return ( 
          <div className="topnav">
          <a href="#Settings">Settings</a>
          <a className="active">Username</a>
          <a onClick = {this.openModal}>Login</a>
          <Modal  className="login-modal"
                    overlayClassName="Overlay"
                    isOpen={this.state.modalOn}
                    onRequestClose={this.closeModal}
          >
                    <button className="close-modal-btn" onClick = {this.closeModal}> &#9747; </button>
                    <h1> Sign in </h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input class='usernameField' placeholder="Username" type="text" onChange={this.handleInputChange}/> 
                        </label>
                        <br/>
                        <br/>
                        <label>
                            <input class='passwordField' placeholder="Password" type="password" onChange={this.handleInputChange}/>
                        </label>
                        <br/>
                        <input class='rememberMe' type="checkbox"/> <h2>Remember me </h2>
                        <br/>
                        <input class='attemptLogin' type="submit" value="Login"/>
                    </form>
                    <a href >New user? Click here to register</a>
        </Modal>
        </div>
        );
      }
}


export default SideBar;