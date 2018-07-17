import React, { Component } from 'react';


class Post extends Component {
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
                <div className="Stats">
                    <img alt="" className="pic" src={require('./../images/sample_user.jpg')} width="100" height="100" />
                    <div>Views: 15</div>
                    <div>Likes: 10 </div>
                </div>
                <div style={{ flexGrow: 1, position: 'relative', left: '30px' }}>
                    <div className="Title"> <h2> {this.postTitle} </h2></div>
                    <div className="Text"> {this.postText}</div>
                </div>
            </div>
        )
    }

}

export default Post;
