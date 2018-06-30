import React, { Component }  from 'react';
import Modal from 'react-modal';

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
                    <img alt="" src={require('./../images/sample_user.jpg')} width="100" height="100"/>
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

    state = {
        modalOn : null
    }

    openModal = (name) =>{
        this.setState({modalOn : name});
    }

    closeModal = () =>{
        this.setState({modalOn: null});
    }

    isModalOpen = (name) =>{
        return (name === this.state.modalOn);
    }

    addPost(user, title, text){
        this.posts_list.push(new Post(user, title, text).render())
        postCount = postCount+1;
    }

    loadData() {
        fetch('https://groupfinder1.herokuapp.com/post')
            .then(response => response.json())
            .then(data => {
                this.setState({data: data })
        })
            .catch(err => console.error(this.props.url, err.toString()))
    }

    render() { 
        this.addPost("Sample User", "Title", "Some sample text");
        this.addPost("Sample User", "Title2", "Some sample text");
        this.addPost("Sample User", "Title2", "Some sample text");
        this.addPost("Sample User", "Title2", "Some sample text");
        this.addPost("Sample User", "Title2", "Some sample text");
        this.addPost("Sample User", "Title2", "Some sample text");
        this.addPost("Sample User", "Title2", "Some sample text");
        this.addPost("Sample User", "Title", "Some sample text");
        this.addPost("Sample User", "Title2", "Some sample text");
        this.addPost("Sample User", "Title2", "Some sample text");
        this.addPost("Sample User", "Title2", "Some sample text");
        this.addPost("Sample User", "Title2", "Some sample text");
        this.addPost("Sample User", "Title2", "Some sample text");
        this.addPost("Sample User", "Title2", "Some sample text");
        console.log(this.posts_list); 
        this.loadData();

        return [
          
            <div className="page" key="1">
                <Modal
                    isOpen={this.isModalOpen("createPost")}
                    onRequestClose={this.closeModal}
                    id = "createPost">
                    <h1> test </h1>
                </Modal>
                {this.posts_list}
            </div> 
        ]
    }
}

export default Page;