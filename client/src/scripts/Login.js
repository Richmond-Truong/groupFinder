import React, { Component } from 'react';
import {Button ,  Header , Form} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function movepage(){
  window.location = "/";
}

class Login extends Component {

  render() {
    return (
      <div className="page">
        <div className="popup">
          <Header block id = 'box'>
            <Form id='form1'>
              <input type="text" placeholder="Username" className="boxes">
              </input>
              </Form>
            <Form id='form2'>
              <input type="text"  placeholder="Password" className="boxes">
              </input>
              </Form>
            <Header id='replaImage'>
            Group Finder
              </Header>
            <Link to='/signedin'>
              <Button id="login" onClick= {setTimeout(movepage, 3000)}>
              Login
              </Button>
            </Link>
              <a href='' id = "link">
                <p1>Forgot Password?</p1>
              </a>
              <p2>Don't have an account? </p2>
              <Link to='/signup' id = "link1">
                <p3>Sign Up!</p3>
              </Link>
          </Header>
        </div>
      </div>
    );
  }
}

export default Login;
