import React, { Component } from 'react';
import {Button ,  Header , Form} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


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
                    <input type = 'text' placeholder='Email' className="boxes" id='form7'/>
                    <input type='text' placeholder='Username' className="boxes" id ="form6"/>
                    <input type= "text" placeholder = 'Password' className = "boxes" id = "form3"/>
                    <input type = "text" placeholder = 'Confirm Password' className = "boxes" id= "form4"/> 
                    <input type = "text" placeholder = "Skills" className= "boxes" id="form5"/>
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