import React, { Component } from 'react';
<<<<<<< HEAD

import {firestore} from '../firebase';

import Button from 'react-bootstrap/Button';

import './AddPost.css';
=======
import { firestore, auth } from '../firebase'
>>>>>>> 9ffde0024e007ce89a154191db9801bdcaa08cea

class AddPost extends Component {
  state = { title: '', content: '' };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();


    const { title, content } = this.state;
    const { uid, displayName, email, photoURL } = auth.currentUser || {};


    const post = {
      title,
      content,
      user: {
        uid,
        displayName,
        email,
        photoURL,
      },
      favorites: 0,
      comments: 0,
      createdAt: new Date(),
    }

    firestore.collection('posts').add(post)

    this.setState({ title: '', content: '' });
  };


  render() {
    const { title, content } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="AddPost">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="content"
          placeholder="Body"
          value={content}
          onChange={this.handleChange}
        />
        <Button className="create" type="submit">Spill Some Tea</Button>
      </form>
    );
  }
}

export default AddPost;
