import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'antd';

const Welcome = ({match}) => {

  return (
    <div className="Welcome">
      <p>Taste and See</p>
      <p>The place to store all the delicious beers that you've tried.</p>
      <p>Please <Button type="normal" size="large"> <Link to="/signup" >Sign Up</Link></Button> or <Button type="normal" size="large"><Link to="/login" >Log In</Link></Button> to start </p>
    </div>
  );
}

export default Welcome;
