import React, { Component }  from 'react';
import Modal from 'react-modal';
class TopBar extends Component{ 
  constructor(props) {
    super(props);
    this.state = { 
      modalOn : true,
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
        );
      }
}
export default TopBar;