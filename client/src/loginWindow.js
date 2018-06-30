import React, { Component }  from 'react';
import Modal from 'react-modal';

class Loginwindow extends Component{
    constructor(){
      super();
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


    render() 
    {
      return(
        <div>
            <button className="open-modal-btn" onClick = {this.openModal}> Here </button>
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
                        <input class='attemptLogin' type="submit" value="Login"/>
                    </form>
                    <a href >New user? Click here to register</a>

            </Modal>
        </div>
      );
    }
}

export default Loginwindow;

/*
class LoginWindow extends Component{
    constructor(props) {
        super(props)
        this.state = { isModalOpen: false, username: 'usernameDefault', password: 'passwordDefault' }
        this.handleInputChange = this.handleInputChange.bind(this);
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
          <div>
            <button id='Login Here' onClick={() => this.openModal()}>Open modal</button>
            <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                <p className='closeLogin'><button onClick={() => this.closeModal()}>Close</button></p>
                <h1 align='center'> Login Here </h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username: <input name='username' type="text" onChange={this.handleInputChange}/> 
                    </label>
                    <br/>
                    <label>
                        Password: <input name='password' type="text" onChange={this.handleInputChange}/>
                    </label>
                    <br/>
                    <input type="submit" value="Login"/>
                    <button onClick={() =>  alert('Username: ' + this.state.username + ' Password: ' + this.state.password)}>Alert</button>
                </form>
            </Modal>
            <button onClick={() =>  alert('Username: ' + this.state.username + ' Password: ' + this.state.password)}>Test to see input</button>
          </div>
        )
      }
  
      openModal() {
        this.setState({ isModalOpen: true })
      }
  
      closeModal() {
        this.setState({ isModalOpen: false })
      }
    }

    render() {
        return(
           <div className="login">
                <button className="closeLogin">Close</button>
                <h1> Login Here </h1>
                <form>
                    <label className="username">
                        Username: <input type="text" name="username"/> 
                    </label>
                    <br/>
                    <label>
                        Password: <input type="text" name="password"/>
                    </label>
                </form>
           </div> 
        );
    }
}
*/