import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import TextInputGroup from '../Layout/TextInputGroup';
import { getPost, updatePost } from '../../actions/postActions';

class EditPost extends Component {
  state = {
      story: '',
      title: '',
      author: '',
      errors: {}
    };

  componentWillReceiveProps(nextProps, nextState) {
    const { story, title, author } = nextProps.post;
    this.setState({
      story,
      title,
      author,

    });
}
  

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {story, title, author } = this.state;
    
    // Check For Errors
    if (title === '') {
      this.setState({ errors: { title: 'title is required' } });
      return;
    }

    if (story === '') {
      this.setState({ errors: { story: 'story is required' } });
      return;
    }

    if (author === '') {
      this.setState({ errors: { author: 'author is required' } });
      return;
    }

    const { id } = this.props.match.params;

    const updPost = {
      id,
      story,
      title, 
      author
      
    };

    this.props.updatePost(updPost);

    //Clear State
    this.setState({
      story: '',
      title: '',
      author: '',
      errors: {}
    });

    this.props.history.push('/feed')
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value});


  render() {
    const { story, title, author, errors } = this.state;

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Edit Post</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <TextInputGroup
                  placeholder="Author"
                  type="author"
                  name="author"
                  value={author}
                  onChange={this.onChange}
                  error={errors.author}
                />
                <TextInputGroup
                  placeholder="Title"
                  type="title"
                  name="title"
                  value={title}
                  onChange={this.onChange}
                  error={errors.title}
                />
                <TextAreaFieldGroup
                  placeholder="Share A Testimony"
                  name="story"
                  value={story}
                  onChange={this.onChange}
                  error={errors.story}
                />
              </div>
              <input
              type="submit"
              value="Update Post"
              className="btn btn-light btn-block"
            />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

EditPost.propTypes = {
  post: PropTypes.func.isRequired,
  getPost: PropTypes.func.isRequired,
  
};

const mapStateToProps = state => ({
  post: state.post.post  
});

export default connect(mapStateToProps, { getPost, updatePost })(EditPost);












// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
// import TextInputGroup from '../Layout/TextInputGroup';
// import { getPost, updatePost } from '../../actions/postActions';

// class EditPost extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       story: '',
//       title: '',
//       author: '',
//       errors: {}
//     };

//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   componentWillReceiveProps(nextProps, nextState) {
//     const { story, title, author } = nextProps.post;
//     this.setState({
//       story,
//       title,
//       author,

//     });
// }
  

//   componentDidMount() {
//     const { id } = this.props.match.params;
//     this.props.getPost(id);
//   }

//   onSubmit = (e) => {
//     e.preventDefault();

//     const { id } = this.props.match.params;

//     const updPost = {
//       id: this.state.id,
//       story: this.state.story,
//       title: this.state.title,
//       author: this.state.author,
      
//     };

//     this.props.updatePost(updPost);

//     //Clear State
//     this.setState({
//       story: '',
//       title: '',
//       author: ''
//     });
//     this.props.history.push('/feed')
//   }

//   onChange = e => this.setState({ [e.target.name]: e.target.value});


//   render() {
//     const { errors } = this.state;

//     return (
//       <div className="post-form mb-3">
//         <div className="card card-info">
//           <div className="card-header bg-info text-white">Edit Post</div>
//           <div className="card-body">
//             <form onSubmit={this.onSubmit}>
//               <div className="form-group">
//                 <TextInputGroup
//                   placeholder="Author"
//                   type="author"
//                   name="author"
//                   value={this.state.author}
//                   onChange={this.onChange}
//                   error={errors.author}
//                 />
//                 <TextInputGroup
//                   placeholder="Title"
//                   type="title"
//                   name="title"
//                   value={this.state.title}
//                   onChange={this.onChange}
//                   error={errors.title}
//                 />
//                 <TextAreaFieldGroup
//                   placeholder="Share A Testimony"
//                   name="story"
//                   value={this.state.story}
//                   onChange={this.onChange}
//                   error={errors.story}
//                 />
//               </div>
//               <input
//               type="submit"
//               value="Update Post"
//               className="btn btn-light btn-block"
//             />
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// EditPost.propTypes = {
//   post: PropTypes.func.isRequired,
//   getPost: PropTypes.func.isRequired,
  
// };

// const mapStateToProps = state => ({
//   post: state.post.post  
// });

// export default connect(mapStateToProps, { getPost, updatePost })(EditPost);
