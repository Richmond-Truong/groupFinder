import React, { Component } from 'react';
import Post from './posts.js';
var commentCount = 0; 
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
      commentCount++; 
  }


  render() {
      return (
        <div className="ui threaded comments" key={commentCount} style={this.pos}>
            <div className="comment">
                <a class="avatar">
                    <img src={require('./../images/sample_user.jpg')}/>
                </a>
                <div className="content">
                    <a className="author">
                        {this.userName}
                    </a>
                    <div className="text">
                        {this.postText}
                    </div>
                    <div className="actions">
                        <a className="reply">Reply</a>
                    </div>
                    <form class="ui reply form">
                        <div class="field">
                        <textarea></textarea>
                        </div>
                        <div class="ui blue labeled submit icon button">
                        <i class="icon edit"></i> Add Reply
                        </div>
                    </form>
                </div>
                <div className="comment">
                    {this.children}
                </div>
            </div>
        </div>
        )
  }

}

class PostPage extends Component{

    state = {
        modalOn : null,
        data: {'name': '', 'title': '', 'text':''}
    }

    constructor(prop) {
      super(prop);
      this.comment_list = [];
      this.addComment = this.addComment.bind(this)
    }

    
    componentDidMount() {
        console.log(this.props.location.state);
        this.setState({data: this.props.location.state})
    }

    addComment(user, pos, text, list){
      this.comment_list.push(new Comment(user, pos, text, list).render())
    }

    render() { 
        this.addComment("user1", '100px', 'hello im user1', [new Comment("user2", "100px", "hello im user2", [new Comment("user3", "100px", "hello im user33333333333333333333333333333333333333333333333333333333333", []).render()]).render(), new Comment("user4", "100px", "hello im user4", []).render()]);
        this.addComment("user5", '100px', 'hello im user5', []);
        return (
            <div className="page">
                <div style={{height:'70px'}}/>
                <div className="ui huge raised padded text container segment">
                    <div className="ui left rail">
                        <div className="ui card">
                            <div className="image">
                                <img src={require('./../images/sample_user.jpg')}/>
                            </div>
                            <div className="content">
                                <a class="header">{this.state['data']['name']}</a>
                                <div class="description">
                                   this is {this.state['data']['name']}'s bio
                                </div>
                            </div>
                            <div className="extra content">
                                For money?
                            </div>
                            <div className="extra content">
                                <a class="ui tag label">tag1</a>
                                <a class="ui red tag label">tag2</a>
                                <a class="ui teal tag label">tag3</a>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="header">
                            {this.state['data']['title']}
                        </div>
                        <div className='ui divider'></div>
                        <div className="description">
                            {this.state['data']['text']}
                        </div>
                    </div>
                    <div className="ui right rail">
                        <div class="ui vertical rectangle test ad" data-text="Ad Unit 1"></div>
                    </div>
                </div>
                <div className="ui raised very padded text container segment">
                    <h3 className="ui dividing header">Comments</h3>
                    {this.comment_list}
                    <form class="ui reply form">
                        <div class="field">
                        <textarea></textarea>
                        </div>
                        <div class="ui primary submit labeled icon button">
                        <i class="icon edit"></i> Add Comment
                        </div>
                    </form>
                </div>
            </div> 
        )
    }
}




export default PostPage; 
