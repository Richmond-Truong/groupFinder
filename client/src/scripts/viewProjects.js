import React, { Component } from 'react';
import Post from './posts';
import { Link } from 'react-router-dom'

class ProjectsPage extends Component {
    /**
     * A container for all the posting for a project. Contains functions 
     * for adding a post and to retrieve data from the datbase. 
     */
    constructor(prop) {
        super(prop);
        this.posts_list = [];
        this.KEY = 0;
        this.createPost = this.createPost.bind(this);
        this.storePost = this.storePost.bind(this);
        this.loadData();
    }
    
    state = {
        data: []
    }

    storePost(key, post) {
        /**
         * Save the post to local storage to be used in multipul sessions
         */
        localStorage.setItem(key, post);
    }

    createPost(user, title, text) {
        /**
         * Will create a post for rendering given the required fields. 
         */
        this.KEY = this.KEY + 1;
        var newPost = new Post(user, title, text);
        return (
            <Link key={this.KEY.toString()} onClick={() => this.storePost("post", newPost.getJSON())} to={{ pathname: `/post/${user}` }} style={{ textDecoration: 'none', color: 'black' }}>
                {newPost.render()}
            </Link>
        );
    }

    loadData() {
        /**
         * Function used to fetch data from the server. Sets data variable to hold all necessary information
         * about all the posts stored. 
         */
        fetch('https://groupfinder1.herokuapp.com/post')
            .then(response => response.json())
            .then(data => {
                var i;
                for (i = 0; i < data.length; i++) {
                    this.posts_list.push(this.createPost(data[i]['tags'], data[i]['title'], data[i]['description']));
                }
                this.setState({ data: this.posts_list })
            })
            .catch(err => this.setState({ data: this.createPost("Sample User", this.props.url, err.toString()) }))
    }

    render() {
        return (
            <div className="page">
                {this.posts_list}
            </div>
        )
    }
}

export default ProjectsPage;