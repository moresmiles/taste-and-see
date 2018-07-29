import React from 'react';

const UserShow = ({user}) => {
  return (
      <div>
        <h1> Your Account </h1>
        <h2> Email: {user.email} </h2>
      </div>
    );
  }


export default UserShow;
