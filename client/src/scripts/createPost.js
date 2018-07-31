import React, { Component } from 'react';
import {Divider, Form, Header} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class CreatePost extends Component{
    state = {
        title: '',
        description: '',
        compensationMethod: ''
    }

    render() {
        const {value} = this.state;
        return(
            <div className="page">
                <div className="popup">
                <Header block id = 'createPostBox'>
                    <Header dividing id='createPostHeader'>
                        Create a Post
                    </Header>
                    <Form>
                        <Form.Field id='createPostTitle'>
                            <input placeholder='Title'/>
                        </Form.Field>
                        <Form.Field id='createPostDescription'>
                            <textarea placeholder='Enter a description'/>
                        </Form.Field>
                        <Form.Group inline id='createPostMoney'>
                            <label>Compensation:</label>
                            <Form.Select options={[
                                {key:'RevShare', value:'RevShare', text:'RevShare'},
                                {key:'Paid', value:'Paid', text:'Paid'},
                                {key:'None', value:'None', text:'None'}
                            ]} placeholder='Select' size='mini'/>
                        </Form.Group>
                        <Divider/>
                        <Header dividing id='createPostTags'>
                            <Form.Group inline>
                                <label>Please enter tags for your project:</label>
                                <Form.Input width={4} />
                            </Form.Group>
                            <Form.Group inline>
                                <label>Please enter roles needed:</label>
                                <Form.Input width={4} />
                            </Form.Group>
                        </Header>
                        <Form.Button id='createPostExit'><Link to='/'>Cancel</Link></Form.Button>
                        <Form.Button id='createPostSubmit'>Submit</Form.Button>
                    </Form>
                </Header>
                </div>
            </div>
        )
    }
}

export default CreatePost;