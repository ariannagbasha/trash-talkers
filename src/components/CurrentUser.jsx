import React from 'react';
import {signOut} from '../firebase'
import moment from 'moment';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CurrentUser = ({ displayName, photoURL, email, createdAt, children }) => {
  let defaultImage = require("../images/profile.jpg");
  return (
    <Card style={{
      width:18 +"rem", 
      minHeight: 200 + "px",
      border:2+'px solid black',
      margin: 20+'px'
      }}>
    {/* <section className="CurrentUser">
      <div className="CurrentUser--profile"> */}
        <img 
            className='card-img-top rounded' 
            src={photoURL} 
            alt={displayName} 
            style={{
            width: 18 + "rem",
            minHeight: 200 + "px",
            margin: 0 + " auto",
            }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultImage;
          }} />
        <div className="CurrentUser--information">
          <Link to="profile"><div className="card-header">{displayName}</div></Link>
          <div className='card-body' className="email">{email}</div>
          <div className="created-at">{moment(createdAt.toDate()).calendar()}</div>
        </div>
      {/* </div> */}
      <div>
        <div className='card-footer'>{children}</div>
        <button onClick={ signOut }>Sign Out</button>
      </div>
    {/* </section> */}
    </Card>
  );
};

CurrentUser.defaultProps = {
  displayName: 'Bill Murray',
  email: 'billmurray@mailinator.com',
  photoURL: 'https://www.fillmurray.com/300/300',
  createdAt: new Date(),
};

export default CurrentUser;
