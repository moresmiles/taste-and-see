import React from 'react';
import { Link } from "react-router-dom";
const UserShow = ({user}) => {

  return (
      <div>
        <h2>You are logged in YAY!</h2>
        <p>ID: {user.id} </p>
        <p>email: {user.email} </p>
        <p><Link to="/newbeer">New Beer</Link> </p>
        <p><Link to="/beer" >Saved Beers</Link></p>
      </div>
    );
  }

export default UserShow;
