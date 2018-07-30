import React, { Component } from 'react';
import {Button ,  Header , Form} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function checkPasswords(password,confirmation){
    if(document.getElementById("form3").value != document.getElementById("form4").value){
        document.getElementById("form4").style.backgroundColor="pink"
        document.getElementById("form3").style.backgroundColor="pink"
        document.getElementById("clicky2").disabled = true;
    }
    else{
        document.getElementById("form4").style.backgroundColor="white"
        document.getElementById("form3").style.backgroundColor="white"
        document.getElementById("clicky2").disabled = false;
    }
}


class SignUp extends Component {

    render() {
        return (
        <div className="page">
                <Form id="box">
                    <Button id = "clicky">
                        <i class="facebook icon"></i>
                        Login With Facebook
                    </Button> 
                    <Button id = "clicky2">
                        Sign Up
                    </Button>
                    <input type='text' placeholder='Username' className="boxes" id ="form6" maxLength="16" minLength="2"/>
                    <input type = 'text' placeholder='Email' className="boxes" id='form7' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}" title="Not a Valid Email"/>
                    <input type= "password" placeholder = 'Password' className = "boxes" id = "form3" onChange={checkPasswords}/>
                    <input type = "password" placeholder = 'Confirm Password' className = "boxes" id= "form4" onChange={checkPasswords} /> 
                    <Header id="name">
                        Group Finder
                    </Header>
                    <Header id="or">
                        ------------------- Or -------------------
                    </Header>
                    <Header block id="smallbox">
                        <Header id="terms">
                            By signing up, you agree to our 
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