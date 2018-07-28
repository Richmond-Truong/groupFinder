import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';


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
            <div>
                <Header block id="area">
                    <Header id="header1">
                        <h1 id="title1">
                            {this.postTitle}
                        </h1>
                        <p1 id="paragraph1">
                            {this.postText}
                        </p1>
                        <h2 id="cost1">
                            40$
                        </h2>
                        <h2 id="location">
                            Toronto
                        </h2>
                        <p2 id="roles">
                            Roles Needed: Head-Chef  Sous-Chef  Waiter
                        </p2>
                        <div id="eg">
                            <img src={require('../images/sample_user.jpg')} id="pic"/>
                            <h3 id="username1">
                                CrazyEight
                            </h3>
                        </div>
                    </Header>
                </Header>
            </div>
        );
    }

}

export default Post;
