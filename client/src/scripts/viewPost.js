import React, { Component } from 'react';
import Post from './posts.js';


class Comment extends Component{
  /*
  A class to represent the comments made to a posting. 
  Contains a user, details and position to refer to the 
  number of indents to include when displaying. 
  In addition there is children to refer to any reponses 
  made to a comment. 
  */
  constructor(user, position, text, child_list) {
      super();
      this.userName = user; 
      this.pos = {left: position};
      this.postText = text;
      this.children = child_list;
  }

  render() {
      return (
          <div className="comment" style={this.pos}> 
              <div className="user"> {this.userName}</div>
              <div className="Text"> {this.postText}</div>
              {this.children} 
          </div>
          )
  }

}

class PostPage extends Component{
    constructor(prop) {
      super(prop);
      this.comment_list = [];
      this.addComment = this.addComment.bind(this)
    }

    addComment(user, pos, text, list){
      this.comment_list.push(new Comment(user, pos, text, list).render())
    }

    render() { 
        this.addComment("user", '100px', 'testeregrt', [new Comment("SDDFG", "100px", "SDFGD", [new Comment("SDDFG", "100px", "SDFGD", []).render()]).render(), new Comment("SDDFG", "100px", "SDFGD", []).render()]);
        this.addComment("user", '100px', 'testeregrt', []);
        return [
            <div className="page" key="1">
              {new Post('sdsfs', 'sfsd f', 'sdfsfsdfsd').render()}
              <div style={ {height:'70px'}}/>
              {this.comment_list}
            </div> 
        ]
    }

}




export default PostPage; 
