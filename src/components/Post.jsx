import React from 'react';

import moment from 'moment';

import {firestore} from '../firebase';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

import './Post.css';

const Post = ({ title, content, user, createdAt, stars, comments, id}) => {
  const postRef = firestore.doc(`posts/${id}`) ///Needs to be fixed id
  const remove = () => postRef.delete();
  const star = () => postRef.update({ stars: stars + 1});
  return (
    <Card className="Post">
      <div className="Post-content">
        <div className="Post--content">
        <h3>{title}</h3>
        <div>{content}</div>
      </div>
      <div className="Post--meta">
        <div>
          <p>
            <span role="img" aria-label="star">
            ☕
            </span>
            {stars}
          </p>
          <p>
            <span role="img" aria-label="comments">
            💼
            </span>
            {comments}
          </p>
          <p>Posted by {user.displayName}</p>
          <p>{moment(createdAt).calendar()}</p>
        </div>
        </div>
        <div>
          <Button className="star" onClick={star}>Take A Sip</Button>
          <Button className="delete" onClick={remove}>Clean It Up</Button>
        </div>
      </div>
    </Card>
  );
};

Post.defaultProps = {
  title: 'An Incredibly Hot Take',
  content:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus est aut dolorem, dolor voluptatem assumenda possimus officia blanditiis iusto porro eaque non ab autem nihil! Alias repudiandae itaque quo provident.',
  user: {
    id: '123',
    displayName: 'Bill Murray',
    email: 'billmurray@mailinator.com',
    photoURL: 'https://www.fillmurray.com/300/300',
  },
  createdAt: new Date(),
  stars: 0,
  comments: 0,
};

export default Post;
