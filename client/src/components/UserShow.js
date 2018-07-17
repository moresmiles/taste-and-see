import React from 'react';

const UserShow = ({user}) => {

    return (
        <div>
          <h2>You are logged in YAY!</h2>
          <p>ID: {user.id} </p>
          <p>email: {user.email} </p>
        </div>
    );
}

export default UserShow;
