import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'antd';

const Welcome = ({match}) => {

    return (
        <div id="welcome">
            <h2>Welcome to Taste and See, a place to store all the delicious beers that you've tried.</h2>
            <p>Please <Button> <Link to="/signup" >Sign Up</Link></Button> or <Button><Link to="/login" >Log In</Link></Button> to start </p>
        </div>
    );
}

export default Welcome;
