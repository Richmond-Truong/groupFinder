import React, { Component }  from 'react';
import Post from './posts';
import { Link } from 'react-router-dom'

class ProjectsPage extends Component{
    /*
    A container for all the posting for a project. Contains functions 
    for adding a post and to retrieve data from the datbase. 
    */
    constructor(prop) {
        super(prop);
        this.posts_list = [];
        this.KEY = 0;
        this.createPost = this.createPost.bind(this);
        this.loadData();
    }

    state = {
        data: []
    }

    createPost(user, title, text){
    /*
        Will create a post for rendering given the required fields. 
    */
        this.KEY = this.KEY + 1;
        var state_vars = {name: user,  title: title, text:text};
        return <Link key={this.KEY.toString()} to={{pathname:`/post/${user}`, state: state_vars}} style={{ textDecoration: 'none', color:'black'}}> {new Post(user, title, text).render()} </Link>;
    }

    loadData() {
        fetch('https://groupfinder1.herokuapp.com/post')
            .then(response => response.json())
            .then(data => {
                var i;
                for (i = 0; i < data.length; i++) {
                    this.posts_list.push(this.createPost(data[i]['tags'], data[i]['title'], data[i]['description']));
                }
                this.setState({data: this.posts_list})
        })
            .catch(err =>  this.setState({data: this.createPost("Sample User", this.props.url, err.toString())}))
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