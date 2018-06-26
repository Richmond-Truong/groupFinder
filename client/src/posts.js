import React, { Component }  from 'react';

class Post extends Component{
    render() {
        return [
            <div className="post"> 
                <div className="Title"> Sample Post</div>
                <div className="Text"> Richmond is gay</div> 
                <div className="Username"> Your Mom </div>
            </div>
        ]
    }

}

class Page extends Component{
    render() { 
        return [
            <div className="page">
                <Post/>
            </div> 
        ]
    }
}

export default Page;