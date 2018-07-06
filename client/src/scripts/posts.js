import React, { Component }  from 'react';


class Post extends Component{
    /*
    A class tp represent a psoting for a project. 
    Includes a user, title and details about the 
    project. 
    */

    constructor(user, title, text) {
        super();
        this.userName = user; 
        this.postTitle = title; 
        this.postText = text;
    }

    render() {
        return (
            
            <div className="post" style={this.state}> 
                <div className="Title"> {this.postTitle}</div>
                <div className="Text"> {this.postText}</div> 
                <div className="Title"> {this.userName}</div>
                <div className="pic">
                    <img alt="" src={require('./../images/sample_user.jpg')} width="100" height="100"/>
                </div>
            </div>
            )
    }

}

export default Post;
