import React, { Component } from 'react';
import Button from '../Button/Button.js';
import { Link } from 'react-router-dom';
import './Panel-New-Post.css';

class PanelPost extends Component {
    constructor(props){
        super(props)
        this.state ={} 

        this.CreateNewPost = this.CreateNewPost.bind(this)
    }
    
    CreateNewPost(){
        let newPost = {
            title: "Testing",
            body: "Testing body"
        }

        fetch('http://api.bowspace.ca/rest/post', {
            method: 'post',
            mode: 'cors',
            credentials: 'omit',
            body: JSON.stringify(newPost)
        })
        .then(res => res.json())
        .then((data) => console.log(data))
        .catch(error => console.log('Error:', error))
    }

    

    render(){
        return( 
            <div id="wrapper-panel">
                <div className="container">
                    <div className="row"> 
                        <div className="form-group mb-3 col-12">
                            <div className="input-group-prepend">
                                <h1 id="text-panel">Create New Post</h1>
                            </div>
                        </div>

                        <div className="form-group mb-4 col-12">
                            <div className="input-group-prepend">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fa fa-buysellads"></i> Title</span>
                                </div>
                                <input className="form-control" required></input>
                            </div>
                        </div>

                        <div className="form-group mb-4 col-12">
                            <div className="input-group-prepend">
                                <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-user-plus"></i> Receipient</span>
                                </div>
                                <input className="form-control" required></input>
                            </div> 
                        </div>

                        <div className="input-group mb-4 col-12">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-comments"></i>Post content</span>
                            </div>
                            <textarea id="textarea" className="form-control" aria-label="With textarea" required></textarea>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-6">

                        </div>
                        <div className="col-md-6 mb-3">
                            <button onClick={this.CreateNewPost} type="submit" className="btn btn-success">Post</button>
                            <Link to="/home">
                                <Button id="btn-cancel" type="danger">Cancel</Button>       
                            </Link>                         
                        </div>                
                    </div>
                </div>
            </div>
        );
    }
}

export default PanelPost;