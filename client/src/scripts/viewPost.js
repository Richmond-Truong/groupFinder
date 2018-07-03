import React, { Component } from 'react';
import './styles/barStyle.css'
import './styles/postStyle.css'
import SideBar from './scripts/sideBars';


class PostPage extends Component{
    render() { 


        return [
            <div className="page" key="1">

            </div> 
        ]
    }

}

class HomePage extends Component{
  render() { 
    return [
      <SideBar key='1'/>, 
    ]
  }
}



export default HomePage; 
