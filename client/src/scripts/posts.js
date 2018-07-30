import React, { Component } from 'react';

class Post extends Component {
    /**
     * This class is used to represent a post made about a project.
     * Post will hold information about the project, such as the user who posted
     * title and text information.
     */

    constructor(user, title, text) {
        super();
        this.userName = user;
        this.postTitle = title;
        this.postText = text;
        this.getJSON = this.getJSON.bind(this);
    }

    getJSON() {
        /**
         * This function is used to condense the infromation into a JSON string. This will hold all
         * information about the post to be used as strings in other components.
         */
        return JSON.stringify({"user": this.userName, "title": this.postTitle, "text":this.postText});
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
                    <div style={{zIndex:'2', position:'relative', left:'80%'}}> Job Title</div>
                    <div style={{zIndex:'2', position:'relative', left: '80%'}}> Location </div>
                    <div className="Title"> <h2> {this.postTitle} </h2></div>
                    <div className="Text"> {this.postText}</div>

                </div>

            </div>
        )
    }

}

export default Post;
