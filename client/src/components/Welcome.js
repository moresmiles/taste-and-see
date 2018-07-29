import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'antd';

const Welcome = ({match}) => {

  return (
    <div className="welcome">
      <h1>Taste and See</h1>
      <h2>The place to store all the delicious beers that you've tried.</h2>
      <h2>Please <Button type="normal" size="large"> <Link to="/signup" >Sign Up</Link></Button> or <Button type="normal" size="large"><Link to="/login" >Log In</Link></Button> to start </h2>
    </div>
  );
}

export default Welcome;
