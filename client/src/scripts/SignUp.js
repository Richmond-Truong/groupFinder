import React, { Component } from 'react';
import {Button ,  Header , Form, Popup} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
var http = require('http');

function checkPasswords(){
    if(document.getElementById("password").value !== document.getElementById("confirmPassword").value){
        document.getElementById("confirmPassword").style.backgroundColor="pink"
        document.getElementById("password").style.backgroundColor="pink"
        document.getElementById("Signup").disabled = true;
    }
    else{
        document.getElementById("confirmPassword").style.backgroundColor="white"
        document.getElementById("password").style.backgroundColor="white"
        document.getElementById("Signup").disabled = false;
    }
}
function signUp(){
    var postData = JSON.stringify({
        'username' : document.getElementById("username").value,
        'password' : document.getElementById("confirmPassword").value,
        'email' : document.getElementById("email").value
    });
    var post_options = {
        host: 'groupfinder1.herokuapp.com',
        port: '80',
        path: '/addUser',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData)
        }
    };
    var post_req = http.request(post_options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            if(chunk.includes("Inserted user into database")){
                console.log('Response: ' + chunk);
            }else{
                alert("Error could not input user");
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

class SignUp extends Component {
    
  
    
    render() {
        return (
        <div className="page">
                <Form id="box">
                    <Button id = "facebookSignup">
                        <i class="facebook icon"></i>
                        Login With Facebook
                    </Button> 
                    <Button id = "Signup" onClick={signUp} >
                        Sign Up
                    </Button>
                    <input type='text' placeholder='Username' className="boxes" id ="username" maxLength="16" minLength="2"/>
                    <input type = 'text' placeholder='Email' className="boxes" id='email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}" title="Not a Valid Email"/>
                    <Popup
                        trigger={<input type= "password" placeholder = 'Password' className = "boxes" id = "password" onChange={checkPasswords} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*['@', '$', '#','!','%','^','*','(',')']).{8,}" title="The password is required to have a special character, number, lowercase, uppercase letter and be 8 letters long." />}
                        content="The password is required to have a special character, number, lowercase, uppercase letter and be 8 letters long."
                        basic
                    />
                    <input type = "password" placeholder = 'Confirm Password' className = "boxes" id= "confirmPassword" onChange={checkPasswords} /> 
                    <Header id="name">
                        Group Finder
                    </Header>
                    <Header id="or">
                        ------------------- Or -------------------
                    </Header>
                    <Header block id="smallbox">
                        <Header id="terms">
                            By Signupg up, you agree to our 
                            <a href=''> terms of service.</a>
                        </Header>
                    </Header>
                    <Header id="account">
                        Already have an account? 
                        <Link to='/login'> Sign in </Link>
                    </Header>
                </Form>
        </div>



    );
    }
}

export default SignUp;