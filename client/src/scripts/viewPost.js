import React, { Component } from 'react';
import Post from './posts.js';
import {Advertisement, Button, Card, Comment, Divider, Item, Form, Header, Image, Label, Rail, Segment} from 'semantic-ui-react';
var COMMENT_COUNT = 0;

class Comments extends Component {
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
            <Comment>
                <Comment.Avatar as='a' src={require('./../images/sample_user.jpg')}/>
                <Comment.Content>
                    <Comment.Author as='a'>
                        {this.userName}
                    </Comment.Author>
                    <Comment.Text>
                        {this.postText}
                    </Comment.Text>
                </Comment.Content>
                {/** 
                  * We have removed replies for now so we have removed the children of comments
                  *
                    <div className="comment">
                        {this.children}
                    </div>
                 */}
            </Comment>
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
        this.comment_list.push(new Comments(user, pos, text).render());
    }

    createNewComment() {
        /**
         * Function used for when a new comment is ment to be created. 
         * Takes a text block about the information in the comment. 
         */
        let comments = [...this.state.data];
        comments.push(new Comments('USER', '100px', this.state.commentArea).render());
        this.setState({ data: comments });
        console.log(this.state.data);

    }

    render() {
        return (
            <div className="page">
                <Segment raised padded style={{width:'36.75%', margin:'auto', marginTop:'70px'}} >
                    {/* Div holding profile bio and info.  */}
                    <Rail position='left' style={{ width: '40%' }}>
                        <Card>
                            <Image as='a' src={require('./../images/sample_user.jpg')} />
                            <Card.Content>
                                <Card.Header as='a'>{this.savedpost.userName}</Card.Header>
                                <Card.Description>
                                    this is {this.savedpost.userName}'s bio
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                For money?
                            </Card.Content>
                            <Card.Content extra>
                                <Label as='a' tag>tag1</Label>
                                <Label as='a' color='red' tag>tag2</Label>
                                <Label as='a' color='teal' tag>tag3</Label>
                            </Card.Content>
                        </Card>
                    </Rail>
                    {/* div holding the actual post with the comments */}
                    <Item>
                        <Item.Content>
                            <Item.Header as='h3'>
                                {this.savedpost.postTitle}
                            </Item.Header>
                            <Divider/>
                            <Item.Description>
                                {this.savedpost.postText}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                    {/* The div holding an Ad */}
                    <Rail position='right' style={{ width: '40%' }}>
                        <Advertisement unit='medium rectangle' test='Ad Unit 1' />
                    </Rail>
                </Segment>
                <Segment raised padded style={{width:'36.75%', margin:'auto', marginTop:'10px'}} >
                    <Header as='h3' dividing>
                        Comments
                    </Header>
                    <Comment.Group threaded>
                        {this.state.data}
                    </Comment.Group>
                    <Form reply>
                        <Form.TextArea name="commentArea" onChange={this.onChange}/>
                        <Button content='Add Comment' labelPosition='left' icon='edit' primary onClick={() => this.createNewComment()}/>
                    </Form>
                </Segment>
            </div>
        )
    }
}

export default PostPage; 
