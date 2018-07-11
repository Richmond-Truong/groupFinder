import React, { Component }  from 'react';
import { Link } from 'react-router-dom'

class LoginPage extends Component{
    render() { 
        return [
        <div className="page" style={{marginTop: "0px", height: "100%"}}>
            <div className="loginMenu">
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
                    <Link to='/main' >
                        <input class='attemptLogin' type="submit" value="Login"/>
                    </Link>
                </form>
            </div>
        </div>
        ];
      }
}

export default LoginPage;