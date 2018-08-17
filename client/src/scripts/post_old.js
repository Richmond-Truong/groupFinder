import React, { Component } from 'react';

class Post extends Component {
    /**
     * This class is used to represent a post made about a project.
     * Post will hold information about the project, such as the user who posted
     * title and text information.
     */
    constructor(user, title, text) {
        super();
        this.userName = user;
        this.postTitle = title;
        this.postText = text;
    }


    getJSON = () => {
        /**
         * This function is used to condense the infromation into a JSON string. This will hold all
         * information about the post to be used as strings in other components.
         */
        return JSON.stringify({"user": this.userName, "title": this.postTitle, "text":this.postText});
    }

    render() {
        return (

            <div className="post">
                <div className="Stats">
                    <img alt="" className="pic" src={require('./../images/sample_user.jpg')} width="100" height="100" />
                    <div>Views: 15</div>
                    <div>Likes: 10 </div>
                    <br/>
                    <div className="extra content">
                        <a className="ui tag label">tag1</a>
                        <a className="ui red tag label">tag2</a>
                        <a className="ui teal tag label">tag3</a>
                    </div>
                    <br/>
                </div>
                <div style={{ flexGrow: 1, position: 'relative', left: '30px'}}>
                    <div style={{flexGrow: 1, zIndex:'2', position:'relative', right:'-70%', width:"500px"}}>
                        Location: Toronto, ON. Canada
                    </div>
                    <div className="Title">
                        <h2>
                            {this.postTitle}
                        </h2>
                    </div>
                    <div className="Text">
                        <div style={{lign:"left", width:"calc(100% - 50px)", position: "relative", wordBreak: "break-all",
                            wordWrap: "break-word", minHeight:"130px"}}>
                            {this.postText}
                            <br/>
                            {"sdfgsdgsdddddddddddddddddddddddddddsfgsfgsgsfsdfsdfssdf\
                            sdfsdfsdsdfsdfsdgsdgsdfgssssssssssssssssssssssssssssssssssssssssdsg"}
                        </div>

                        <div style={{width:"50px", flexGrow: 1, position: 'relative', right:"10px", paddingLeft: "30px"}}>
                            <h2 style={{color:"green"}}>
                                40$
                            </h2>
                            <h5> Positions </h5>
                            <ul>
                                <li>Programmer</li>
                                <li>Tester</li>
                                <li>Project Lead</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;