import React, { Component }  from 'react';
import { Switch, Route } from 'react-router-dom';
import Projects from './viewProjects';
import Posts from './viewPost';
import Login from './Login';
import SignUp from './SignUp';
import CreatePost from './createPost';

class Main extends Component{
    /**
     * This class determines what should be rendered based on the link.
     * This represents all the class that should be rendered underneath the 
     * UI class. 
     */
    render ()
    {
      return (
        <main> 
            <Switch> 
                <Route exact path='/' component={Projects}/>
                <Route path='/post' component={Posts}/>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/createpost' component={CreatePost}/>
            </Switch> 
        </main>
      )
    }
}

export default Main;
