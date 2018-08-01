import React from 'react';

const UserShow = ({user}) => {
  return (
      <div className="userShow">
        <p> Your Account </p>
        <p> Email: {user.email} </p>
      </div>
    );
  }


export default UserShow;
