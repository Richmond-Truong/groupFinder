import React, { Component } from 'react';
import '../styles/barStyle.css'
import '../styles/postStyle.css'
import SideBar from './sideBars';


class PostPage extends Component{
    render() { 


        return [
            <div className="page" key="1">
              sOMETHING 
            </div> 
        ]
    }

}

class comment extends Component{
  render() { 
    return [
      <div className="page" key="1">
        cOMMENT 
      </div> 
    ]
  }
}



export default PostPage; 
