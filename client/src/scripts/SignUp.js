import React, { Component } from 'react';
import {Button ,  Header , Form} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class SignUp extends Component {

    render() {
        return (
        <div className="page">
            <Header block id="box">
                <Button id = "clicky">
                <i class="facebook icon"></i>
                    Login With Facebook
                </Button> 
                <Button id = "clicky2">
                    Sign Up
                </Button>
                <Form id='form7'>
                <input type = 'text' placeholder='Email' className="boxes"/>
                    </Form>
                <Form id ="form6">
                <input type='text' placeholder='Username' className="boxes"/>
                    </Form>
                <Form id="form3">
                <input type= "text" placeholder = 'Password' className = "boxes"/>
                    </Form>
                <Form id = "form4">
                <input type = "text" placeholder = 'Confirm Password' className = "boxes"/> 
                </Form>
                <Form id="form5">
                <input type = "text" placeholder = "Skills" className= "boxes"/>
                    </Form>
                <Header id="name">
                    Group Finder
                </Header>
                <Header id="or">
                    ------------------- Or -------------------
                    </Header>
                <Header id="terms">
                    By signing up, you agree to our 
                    <a href=''> terms of service.</a>
                    </Header>
                </Header>
                <Header block id="smallbox">
                <Header id="account">
                    Already have an account? 
                    <Link to='/login'> Sign in </Link>
                </Header>
            </Header>
        </div>



    );
    }
}

export default SignUp;