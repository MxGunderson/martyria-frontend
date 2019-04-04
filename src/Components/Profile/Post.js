import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Consumer } from '../../Context';


class Post extends Component {
  state = {
    onShowPost: false
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({type: 'DELETE_POST', payload: id});    
  };

  render() {
    const { id, title, author, body } = this.props.post;
    const { onShowPost } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return(

            <div className="card card-body mb-3">

        <h5>{title}{ '' } - Read More <i onClick={() => this.setState({onShowPost: !this.state.onShowPost})} 
          className="fas fa-sort-down" style={{ cursor: 'pointer'}}/>
          <i className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'black'}} onClick={this.onDeleteClick.bind(this, id, dispatch)} />
        </h5>

          {onShowPost ? (<ul className="list-post">
          <li className="list-post-item">Author: {author}</li>
          <li className="list-post-item">{body}</li>
        </ul>) : null}      
      </div>
          )
        }}
      </Consumer>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  
};
export default Post;