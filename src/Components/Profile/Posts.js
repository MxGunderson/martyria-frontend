import React, { Component } from 'react'
import Post from './Post';
import { Consumer } from '../../Context';

class Posts extends Component {

  render() {
    return(
      <Consumer>
        {value => {
          const { posts } = value;
          return (
            <React.Fragment>
                {posts.map(post => (
                <Post 
                 key={post.id}
                  post={post}
                />
                ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    )
  }
}
export default Posts;