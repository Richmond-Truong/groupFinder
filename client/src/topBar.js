import React, { Component }  from 'react';
import Modal from 'react-modal';
import Loginwindow from './loginWindow.js';
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

  openModal() {
    this.setState({modalOn : true});
  }

  closeModal() {
    this.setState({modalOn : false});
  }

  handleInputChange(event){
      const target = event.target;
      const name = event.target.name;
      this.setState({[name]: target.value})
  }

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
export default TopBar;