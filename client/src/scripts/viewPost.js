import React, { Component } from 'react';
import Post from './posts.js';
var COMMENT_COUNT = 0;

class Comment extends Component {
    /** 
     * A class to represent the comments made to a posting. 
     * Contains a user, details and position to refer to the 
     * number of indents to include when displaying. 
     * In addition there is children to refer to any reponses 
     * made to a comment. 
     */
    constructor(user, position, text) {
        super();
        this.userName = user;
        this.pos = { left: position };
        this.postText = text;
        COMMENT_COUNT++;
    }


    render() {
        return (
            <div className="ui threaded comments" key={COMMENT_COUNT} style={this.pos}>
                <div className="comment">
                    <a className="avatar">
                        <img alt="" src={require('./../images/sample_user.jpg')} />
                    </a>
                    <div className="content">
                        <a className="author">
                            {this.userName}
                        </a>
                        <div className="text">
                            {this.postText}
                        </div>
                    </div>
                    <div className="comment">
                        {this.children}
                    </div>
                </div>
            </div>
        )
    }

}

class PostPage extends Component {
    /**
     * This class represents the page used to view specefic details about the 
     * project posting. Users can comment about the posting and view details.
     */
    state = {
        modalOn: null,
        data: []
    }

    constructor(prop) {
        super(prop);
        this.comment_list = [];
        var temp = JSON.parse(localStorage.getItem("post"));
        this.savedpost = new Post(temp["user"], temp["title"], temp["text"]);
        this.addComment = this.addComment.bind(this);
        this.createNewComment = this.createNewComment.bind(this);
    }

    /* Generanic change method for forms */
    onChange = e => this.setState({ [e.target.name]: e.target.value });

    addComment(user, pos, text) {
        this.comment_list.push(new Comment(user, pos, text).render());
    }

    createNewComment() {
        /**
         * Function used for when a new comment is ment to be created. 
         * Takes a text block about the information in the comment. 
         */
        let comments = [...this.state.data];
        comments.push(new Comment('USER', '100px', this.state.commentArea).render());
        this.setState({ data: comments });
        console.log(this.state.data);

    }

    render() {
        return (
            <div className="page">
                <div className="ui huge raised padded text container segment" style={{ marginTop: '70px' }}>
                    {/* Div holding profile bio and info.  */}
                    <div className="ui left rail" style={{ width: '30%' }}>
                        <div className="ui card">
                            <div className="image">
                                <img alt="" src={require('./../images/sample_user.jpg')} />
                            </div>
                            <div className="content">
                                <a className="header">{this.savedpost.userName}</a>
                                <div className="description">
                                    this is {this.savedpost.userName}'s bio
                                </div>
                            </div>
                            <div className="extra content">
                                For money?
                            </div>
                            <div className="extra content">
                                <a className="ui tag label">tag1</a>
                                <a className="ui red tag label">tag2</a>
                                <a className="ui teal tag label">tag3</a>
                            </div>
                        </div>
                    </div>
                    {/* div holding the actual post with the comments */}
                    <div className="content">
                        <div className="header">
                            {this.savedpost.postTitle}
                        </div>
                        <div className='ui divider'></div>
                        <div className="description">
                            {this.savedpost.postText}
                        </div>
                    </div>
                    {/* The div holding an Ad */}
                    <div className="ui right rail" style={{ width: '30%' }}>
                        <div className="ui vertical rectangle test ad" data-text="Ad Unit 1" style={{ width: '100%' }}></div>
                    </div>
                </div>
                <div className="ui raised very padded text container segment" >
                    <h3 className="ui dividing header">Comments</h3>
                    {this.state.data}
                    <form className="ui reply form">
                        <div className="field">
                            <textarea name="commentArea" onChange={this.onChange}></textarea>
                        </div>
                        <div className="ui primary submit labeled icon button" onClick={() => this.createNewComment()}>
                            <i className="icon edit"></i> Add Comment
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}




export default PostPage; 
