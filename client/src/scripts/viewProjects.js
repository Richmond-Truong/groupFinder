import React, { Component }  from 'react';
import Modal from 'react-modal';
import Post from './posts';
import { Link } from 'react-router-dom'

class Page extends Component{
    /*
    A container for all the posting for a project. Contains functions 
    for adding a post and to retrieve data from the datbase. 
    */
    constructor(prop) {
        super(prop);
        this.posts_list = [];
        this.KEY = 0;
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
        this.KEY = this.KEY + 1;
        this.posts_list.push(<Link key={this.KEY.toString()} to={`/post/${user}`}> {new Post(user, title, text).render()} </Link>)
    }

    loadData() {
        fetch('https://groupfinder1.herokuapp.com/post')
            .then(response => response.json())
            .then(data => {
                //this.setState({data: data })
                console.log(data)
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

        return (
          
            <div className="page">
                <Modal
                    isOpen={this.isModalOpen("createPost")}
                    onRequestClose={this.closeModal}
                    id = "createPost">
                    <h1> test </h1>
                </Modal>
                {this.posts_list}
            </div> 
        )
    }
}

export default Page;