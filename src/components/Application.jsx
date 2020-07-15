import React, { Component } from 'react';
import {firestore} from '../firebase';
import './Application.css'

import Posts from './Posts';
import { collectsIdsAndDocs } from '../ultilities';

class Application extends Component {
  state = {
    posts: [], 
    user: null
  };
  

  unsubscribeFromFirestore = null;
  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    this.unsubscribeFromFireStore = firestore.collection('posts').onSnapshot(snapshot => {
      const posts = snapshot.docs.map(collectsIdsAndDocs);
      this.setState({posts})
    });
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({user})
    });
 
  }

  componentWillUnmount = () => {
    this.unsubscribe();
  } 

  // handleCreate = async post => {
  //   // const { posts } = this.state;
    
  //    firestore.collection('posts').add(post)

  //   // const doc = await docRef.get();

  //   // const newPost = collectsIdsAndDocs(doc)

  //   // this.setState({ posts: [newPost, ...posts] });
  // };


  // handleRemove = async id => {
  //   // const allPosts = this.state.posts;

  //   firestore.doc(`posts/${id}`).delete();
  //   // console.log(id)

  //   // const posts = allPosts.filter(post => post.id !== id);

  //   // this.setState({posts});
  // }

render() {
  const { posts, user } = this.state;

    return (
      <main className="Application">
        <h1>The Water Cooler</h1>
        <Posts posts={posts}  />
      </main>
    );
  }
}
export default Application;
