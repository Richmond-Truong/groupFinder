import React, { Component } from 'react';
import {Button ,  Header , Form} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
var http = require('http');

function tryLogin(){
  var postData = JSON.stringify({
    'username' : document.getElementById("username").value,
    'password' : document.getElementById("password").value,
  });

  var post_options = {
    host: 'groupfinder1.herokuapp.com',
    port: '80',
    path: '/login',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
    }
  };

  var post_req = http.request(post_options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('Response: ' + chunk);
      if(chunk.includes("Login successful")){
        alert("logined");
      }else{
        alert("Error could not login");
      }
    });
    res.on('error', function (error) {
        console.log(`error = ${error}`);
    });
  });
  post_req.on('error', (e) =>{
    console.log(e);
  })
  post_req.write(postData);
  post_req.end();
}

class Login extends Component {

  render() {
    return (
      <div className="page">
        <div className="popup">
          <Header block id = 'box'>
            <Form id='form1'>
              <input type="text" placeholder="Username" className="boxes" id="username">
              </input>
              </Form>
            <Form id='form2'>
              <input type="text"  placeholder="Password" className="boxes" id="password">
              </input>
              </Form>
            <Header id='replaImage'>
              Group Finder
            </Header>
            <Button id="login" onClick={tryLogin}>
              Login
            </Button>
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
