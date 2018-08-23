import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

class TopBar extends Component {
  /**
   * Class that represents the UI component that will be displayed on every page.
   * This includes the modals for creating a post and login to the server.
   */
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
    return (name === this.state.modalOn);
  }


  createNewPost = () => {
    /**
     * Used to handle POST reequest for new Posting
     */
    console.log("CREATING NEW POST: " + this.state.title + " , " + this.state.description);

    const formData = new FormData();
    formData.append('tags', 'newUser');
    formData.append('last_name', this.state.title);
    formData.append('email', this.state.description);

    var newdata = '{"_id": "sdfsdfsdfsd", "date": 13424324523, "tags": "newUSER", "title": "' +
      this.state.title.toString() + '", "description": "' + this.state.description.toString() + '"}';
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

    return (

      <div className="ui inverted menu" id="topnav">
        <Link to='/login' className="active item" > Login / Signup </Link>
        <Link to='/' className="active item"> Home </Link>
        <Link to='/createpost' className="active item" > Make Post </Link>
      </div>
    );
  }
}


export default TopBar;