import React, { Component }  from 'react';


var postCount = 0; 

class Post extends Component{

    constructor(user, title, text) {
        super();
        this.userName = user; 
        this.postTitle = title; 
        this.postText = text;
    }

    render() {
        return (
            <div className="post" key={postCount} style={this.state}> 
                <div className="Title"> {this.postTitle}</div>
                <div className="Text"> {this.postText}</div> 
                <div className="Title"> {this.userName}</div>
                <div className="pic">
                    <img alt="" src={require('./images/sample_user.jpg')} width="100" height="100"/>
                </div>
            </div>
            )
    }

}

class Page extends Component{
    constructor(prop) {
        super(prop);
        this.posts_list = [];
        this.addPost = this.addPost.bind(this)
    }

    addPost(user, title, text){
        this.posts_list.push(new Post(user, title, text).render())
        postCount = postCount+1;
    }

    render() { 
        this.addPost("Sample User", "Title", "Some sample text");
        this.addPost("Sample User", "Title2", "Some sample text");
        this.addPost("Sample User", "Title2", "Some sample text");
        this.addPost("Sample User", "Title2", "Some sample text");
        this.addPost("Sample User", "Title2", "Some sample text");
        this.addPost("Sample User", "Title2", "Some sample text");
        this.addPost("Sample User", "Title2", "Some sample text");
        console.log(this.posts_list)
        return [
            <div className="page" key="1">
                {this.posts_list}
            </div> 
        ]
    }
}

export default Page;