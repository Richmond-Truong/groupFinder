import React, { Component } from 'react';
import {Button, Divider, Form, Header, Label} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class CreatePost extends Component{
    state = {
        title: '',
        description: '',
        compensationMethod: '',
        compensationReq: false, //Disables Amount box if user chooses 'None' for compenstation
        compensationAmount: '0.00'
    }

    /* Generanic change method for forms */
    onChange = (e, data) => this.setState({[data.name]: data.value})
    
    /*Function to change the dropbox selection*/
    updateCompensation = (e, data) => {
        this.setState({compensationMethod: data.value})
        if(data.value == 'None'){
            this.setState({compensationReq: true})
        }
        else{
            this.setState({compensationReq: false})
        }
    }

    handleClick = e => {
        //alert('A name was submitted: ' + this.state.compensationMethod + "current state: " + this.state.compensationReq);
        alert('amount: ' + this.state.compensationAmount)
        e.preventDefault
    }

    render() {
        const compensationReq = this.state.compensationReq;
        return(
            <div className="page">
                <div className="popup">
                <Header block id = 'createPostBox'>
                    <Header dividing id='createPostHeader'>
                        Create a Post
                    </Header>
                    <Form>
                        <Form.Field required id='createPostTitle'>
                            <input placeholder='Title'/>
                        </Form.Field>
                        <Form.Field required id='createPostDescription'>
                            <textarea placeholder='Enter a description'/>
                        </Form.Field>
                        <Form.Group inline id='createPostMoney'>
                            <label>Compensation:</label>
                            <Form.Select required options={[
                                {key:'RevShare', value:'RevShare', text:'RevShare'},
                                {key:'Paid', value:'Paid', text:'Paid'},
                                {key:'None', value:'None', text:'None'}
                            ]} placeholder='Select' size='mini' name='compensationMethod' onChange={this.updateCompensation} />
                            {/*<Form.Button onClick={this.handleClick}> test </Form.Button>*/}
                            <Form.Input disabled={compensationReq} labelPosition='right' text-align='right' type='text' name='compensationAmount' placeholder='Amount' id='compensationAmount' onChange={this.onChange}>
                                <Label>$</Label>
                                <input/>
                                <Label>.00</Label>
                            </Form.Input>
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
                        <Link id='createPostExit' to='/'>Cancel</Link>
                        <Form.Button type='submit'id='createPostSubmit'>Submit</Form.Button>
                    </Form>
                </Header>
                </div>
            </div>
        )
    }
}

export default CreatePost;