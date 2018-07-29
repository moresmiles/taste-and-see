import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { createBeer, updateBeer } from '../actions/beerActions';

class BeerForm extends Component {
  constructor(props){
    super(props);

  if (this.props.option === "create") {
    this.state = {
      name: '',
      style: '',
      rating: 0,
      notes: '',
      user_id: this.props.user_id
    }
} else {
  const beer = this.props.beers.find(beer => beer.id === parseInt(this.props.match.params.beerId, 10));
    this.state = {
      id: beer.id,
      name: beer.name,
      style: beer.style,
      rating: beer.rating,
      notes: beer.notes,
      user_id: this.props.user_id
    }
  }
}

  handleOnChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  handleOnSubmitBeer = (e) => {
    e.preventDefault();
    if (this.props.option === "create") {
      this.props.createBeer(this.state)
      this.props.history.push('/beers');
  } else if (this.props.option === "update") {
      this.props.updateBeer(this.state);
      const beerId = e.target.dataset.id;
      this.props.history.push(`/beers/${beerId}`);
    }
  }

  render() {
    return (
      <div id="login">
        <h1>New Beer</h1>
          <form onSubmit={this.handleOnSubmitBeer} data-id={this.props.match.params.beerId}>
            <label>Beer Name </label>
              <br />
              <input
                name="name"
                id="name"
                type="text"
                value={this.state.name}
                onChange={this.handleOnChange}
              />
              <br /><br />
            <label>Beer Style </label>
              <br />
              <input
                name="style"
                id="style"
                type="test"
                value={this.state.style}
                onChange={this.handleOnChange}
              />
              <br /><br />
            <label >Rating 1-5</label>
              <br />
              <input
                name="rating"
                id="rating"
                type="number"
                value={this.state.rating}
                onChange={this.handleOnChange}
              />
              <br /><br />
            <label>Notes</label>
              <br />
              <input
                name="notes"
                id="notes"
                type="textarea"
                value={this.state.notes}
                onChange={this.handleOnChange}
              />
            <br /><br />
                <input
                  type="submit"
                  value={this.props.option === "create" ? "Add Beer" : "Update Beer"}
                />
            </form>
          </div>
        );
      }
    }

const mapStateToProps = (state) => {
    return {
        user_id: state.user.currentUser.id
    }
}
export default BeerForm = withRouter(connect(mapStateToProps, {createBeer, updateBeer})(BeerForm));
