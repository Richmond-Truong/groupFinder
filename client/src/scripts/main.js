import React, { Component }  from 'react';
import { Switch, Route } from 'react-router-dom';
import Projects from './viewProjects';
import Posts from './viewPost';

class Main extends Component{
    render ()
    {
      return (
        <main> 
            <Switch> 
                <Route exact path='/' component={Projects}/>
                <Route path='/post' component={Posts}/>
            </Switch> 
        </main>
      )
    }
}

export default Main;
