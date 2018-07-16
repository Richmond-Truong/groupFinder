import React, { Component }  from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';


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

class TopBar extends Component{
  state = {
    modalOn : null,
    title:'', 
    description: ''
  }

  /* Generanic change method for forms */ 
  onChange = e => this.setState({ [e.target.name]: e.target.value })


  openModal = (name) =>{
    this.setState({modalOn : name});
  }

  closeModal = () =>{
    this.setState({modalOn: null});
  }

  isModalOpen = (name) =>{
    console.log(`xxx modal = ${this.state.modalOn}`)
    return (name === this.state.modalOn);
  }
  
  /*Used to handle PUT reequest for new Posting */ 
  createNewPost = () => { 
    console.log("CREATING NEW POST: " + this.state.title + " , " + this.state.description);

    var newdata = {'tags': 'newUSER', 'title': this.state.title, 'description': this.state.description};
    this.closeModal();
    return fetch('https://groupfinder1.herokuapp.com/post', {
      method: 'POST', 
      body: newdata
    }).then(response => response.json()).catch(error => error);
    
  }

  render() { 
    const loginModal = (
      <Modal  className="login-modal"
        verlayClassName="Overlay"
        isOpen={this.isModalOpen("Login")}
        onRequestClose={this.closeModal}
      >
        <button className="close-modal-btn" onClick={this.closeModal}> &#9747; </button>
        <h1> Sign in </h1>
        <form onSubmit={this.handleSubmit}>
          <label>
              <input className='usernameField' placeholder="Username" type="text" onChange={this.handleUsernameChange}/> 
          </label>
          <label>
              <input className='passwordField' placeholder="Password" type="password" onChange={this.handlePasswordChange}/>
          </label>
          <input className='rememberMe' type="checkbox"/> <h2>Remember me</h2>
          <input className='attemptLogin' type="submit" value="Login"/>
        </form>
        <a href >New user? Click here to register</a>
      </Modal>
    );

  const newPostModal = (
    <div className="page">
      <Modal
        className="new-post-modal"
        isOpen={this.isModalOpen("createPost")}
        onRequestClose={this.closeModal}
        id = "createPost"
      >
        <h1> Create a new post </h1>
        <form>
          <label>
            <input className='postTitle' name="title" placeholder="Title.." type="text" onChange={this.onChange}/>
          </label>
          <label>
            <textarea className='postDescription' name="description" onChange={this.onChange} placeholder="Enter your description.." rows="10" cols="0" onChange={this.onChange}/>
          </label>
        </form>
        <input className='submitPost' type="submit" value="Post" onClick={this.createNewPost}/>
        <button className='cancel-post-btn' onClick={this.closeModal}> Cancel </button>
      </Modal>
    </div> 
  );    

    return ( 
    <div className="topnav">
      {newPostModal}
      {loginModal}
      <a href="#Settings">Settings</a>
      <a className="active">Username</a>
      <a onClick={() => this.openModal("createPost")}> Make Post</a>
      <a onClick={() => this.openModal("Login")}> Login</a>
    </div>
    );
  }
}


export default SideBar;