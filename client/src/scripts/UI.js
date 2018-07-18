<<<<<<< HEAD
import React, { Component }  from 'react';
import Modal from 'react-modal';
class SideBar extends Component{
=======
import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

>>>>>>> 0e9b2064ff7c39eed6379db5d8c4d94ef7cfda35

class SideBar extends Component {

  constructor(prop) {
    super(prop);
    this.open_side_bar = this.open_side_bar.bind(this)
    this.close_side_bar = this.close_side_bar.bind(this)
  }

  open_side_bar() {
    this.setState({ width: '15%', minWidth: '200px' })
  }

  close_side_bar() {
    this.setState({ width: '0%', minWidth: '0px' })

  }



  render() {

    return [

      <div id="mySidenav" className="sidenav" style={this.state} key="1">
        <button className="closebtn" onClick={this.close_side_bar}>
          &times;
        </button>
        <img className="logo" alt="" src={require('./../images/logo.png')} />
        <a href="#About" id="about">About</a>
        <a href="#Projects" id="projects">Projects</a>
        <a href="#Contact" id="contact">Contact</a>
      </div>,
      <TopBar key='2' />,
      <div key='3' style={{ width: '0px', height: '0px' }}>
        <div className="sideNavButton" key='3' onClick={this.open_side_bar}>&#9776;</div>
        <Link to='/' > <img alt='' className="homeButton" src={require('./../images/home.png')}></img> </Link>
      </div>
    ];
  }
}

<<<<<<< HEAD
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
=======
class TopBar extends Component {
  state = {
    modalOn: null,
    title: '',
    description: '',
    username: '',
    password: ''
  }

  /* Generanic change method for forms */
  onChange = e => this.setState({ [e.target.name]: e.target.value })


  openModal = (name) => {
    this.setState({ modalOn: name });
  }

  closeModal = () => {
    this.setState({ modalOn: null });
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  isModalOpen = (name) => {
    console.log(`xxx modal = ${this.state.modalOn}`)
    return (name === this.state.modalOn);
  }

  /*Used to handle POST reequest for new Posting */
  createNewPost = () => {
    console.log("CREATING NEW POST: " + this.state.title + " , " + this.state.description);

    const formData = new FormData();
    formData.append('tags', 'newUser');
    formData.append('last_name', this.state.title);
    formData.append('email', this.state.description);

    var newdata = '{"_id": "sdfsdfsdfsd", "date": 13424324523, "tags": "newUSER", "title": "' + this.state.title.toString() + '", "description": "' + this.state.description.toString() + '"}';
    console.log(JSON.parse(newdata));
    this.closeModal();
    return fetch('https://groupfinder1.herokuapp.com/post', {
      method: 'POST',
      body: JSON.stringify(newdata)
    }).then(response => response.json()).catch(function (error) {
      console.log('There has been a problem with your fetch operation: ', error.message);
    });

  }

  userLogin = () => {
    console.log("CREATING NEW POST: " + this.state.password + " , " + this.state.username);
  }

  render() {
    const loginModal = (
      <Modal className="login-modal"
        verlayClassName="Overlay"
        isOpen={this.isModalOpen("Login")}
        onRequestClose={this.closeModal}
      >
        <button className="close-modal-btn" onClick={this.closeModal}> &#9747; </button>
        <h1> Sign in </h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input className='usernameField' placeholder="Username" name="username" type="text" onChange={this.onChange} />
          </label>
          <label>
            <input className='passwordField' placeholder="Password" name="password" type="password" onChange={this.onChange} />
          </label>
          <div className="field" style={{ position: 'absolute', top: '40%', left: '20%' }}>
            <div className="ui checkbox">
              <input tabindex="0" class="hidden" type="checkbox" />
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <input className="ui button" style={{ position: 'absolute', top: '45%', left: '20%' }} type="submit" value="Login" onClick={this.userLogin} />
        </form>
        <a>New user? Click here to register</a>
      </Modal>
    );

    const newPostModal = (
      <div>
        <Modal
          className="new-post-modal"
          isOpen={this.isModalOpen("createPost")}
          onRequestClose={this.closeModal}
          id="createPost"
        >
          <h1> Create a new post </h1>
          <form>
            <label>
              <input className='postTitle' name="title" placeholder="Title.." type="text" onChange={this.onChange} />
            </label>
            <label>
              <textarea className='postDescription' name="description" onChange={this.onChange} placeholder="Enter your description.." rows="10" cols="0" />
            </label>
          </form>
          <div style={{ flexGrow: 1, position: 'relative', top: '70%', left: '70%', display: "block" }}>
            <input className="ui button" type="submit" value="Post" onClick={this.createNewPost} />
            <button className="ui button" onClick={this.closeModal}> Cancel </button>
          </div>
        </Modal>
      </div>
    );

    return (
  
      <div class="ui inverted menu">
          {newPostModal}
          {loginModal}
          <a className="item" onClick={() => this.openModal("createPost")}> Make Post</a>
          <a className="item" onClick={() => this.openModal("Login")}> Login</a>
          <Link to='/' className="active item">
            Home
        </Link>
        </div>
      
      // <div className="topnav">
      //   {newPostModal}
      //   {loginModal}
      //   <Link to='/'> Home </Link>
      //   <a onClick={() => this.openModal("createPost")}> Make Post</a>
      //   <a onClick={() => this.openModal("Login")}> Login</a>
      // </div>
    );
  }
>>>>>>> 0e9b2064ff7c39eed6379db5d8c4d94ef7cfda35
}


export default TopBar;