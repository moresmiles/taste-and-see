import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'antd/lib/button';

const Welcome = ({match}) => {

    return (
        <div id="welcome">
            <h2>Welcome to Taste and See, a place to store all the delicious beers and wines that you've tried.</h2>
            <p>Please <Button href="/signup" >Sign Up</Button> or <Button href="/login" >Log In</Button> to start </p>
        </div>
    );
}

export default Welcome;
