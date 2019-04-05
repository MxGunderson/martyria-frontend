import React, { Component } from 'react';
import {Consumer} from '../../Context';
import TextInputGroup from '../Layout/TextInputGroup';
import uuid from 'uuid';
class AddPost extends Component {
  state = {
    title: '',
    author: '',
    body: '',
    errors: {}
  }

  onChange = e => this.setState({[e.target.name]: e.target.value}); 
  
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    
    
    
    const {title, author, body} = this.state;
    
    //Check For errors
    if(title === '') {
      this.setState({errors: {title: 'Title is required'}})
      return;
    }

    if(author === '') {
      this.setState({errors: {author: 'Name is required'}})
      return;
    }

    if(body === '') {
      this.setState({errors: {body: 'Textfield is required'}})
      return;
    }


    const newPost = {
      id: uuid(),
      title,
      author,
      body
    }

    dispatch({type: 'ADD_POST', payload: newPost});

    // Clear State after submission
    this.setState({
      title: '',
      author: '',
      body: '',
      errors: {}
    })
  };

  render() {

    const { title, author, body, errors } = this.state

    return(
      <Consumer>
        {value => {
          const { dispatch } = value;

          return(
            <div className="card mb-3">
      <div className="card-header">Share A Testimony!</div>
      <div className="card-body">
        <form onSubmit={this.onSubmit.bind(this, dispatch)}>
          <TextInputGroup
            label="Post"
            name="title"
            placeholder="Enter Title"
            value={title}
            onChange={this.onChange}
            errors={errors.title}
          />
          <TextInputGroup
            label="Author"
            name="author"
            placeholder="Enter Name"
            value={author}
            onChange={this.onChange}
            errors={errors.author}
          />
           <textarea 
            type="text"
            name="body" 
            className="form-control form-control-lg"
            placeholder="Enter Testimony..."
            value={body}
            onChange={this.onChange}
            errors={errors.body}
            /><br/>
          
          <input type="submit" value="Add Post"
          className="btn btn-light btn-block"/>
        </form>
      </div>
      </div>
          )
        }}
      </Consumer>
    )
  }
}


export default AddPost;