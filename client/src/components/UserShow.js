import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { fetchBeers } from '../actions/beerActions';
import { connect } from 'react-redux';

 class UserShow extends Component {
   constructor(props){
     super(props)

     this.state = {
       beers: []
     }
   }

   componentDidMount() {
     this.props.fetchBeers();
    }

 render(){
   return (
      <div>
        <h2>You are logged in YAY!</h2>
        <p>ID: {user.id} </p>
        <p>email: {user.email} </p>
        <p><Link to="/new-beer">New Beer</Link> </p>
        <p><Link to="/beer" >Saved Beers</Link> </p>
      </div>
    );
  }
}
export default connect(null, {fetchBeers})(UserShow);
