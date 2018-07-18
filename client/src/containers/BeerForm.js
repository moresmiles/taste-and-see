import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBeer } from '../actions/beerActions';

class BeerForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      style: '',
      rating: 0,
      notes: '',
      user_id: this.props.user_id
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
    this.props.createBeer(this.state)
    this.props.history.push('/beers');
  }

  render() {
    return (
      <div>
        <h2>New Beer</h2>

          <form onSubmit={this.handleOnSubmitBeer} >
            <label htmlFor="name">Beer Name </label>
              <br />
              <input
                name="name"
                id="name"
                type="text"
                value={this.state.name}
                onChange={this.handleOnChange}
              />
              <br /><br />
            <label htmlFor="pieces">Beet Style </label>
              <br />
              <input
                name="style"
                id="style"
                type="test"
                value={this.state.style}
                onChange={this.handleOnChange}
              />
              <br /><br />
            <label htmlFor="missing_pieces">Rating 1-5</label>
              <br />
              <input
                name="rating"
                id="rating"
                type="number"
                value={this.state.rating}
                onChange={this.handleOnChange}
              />
              <br /><br />
            <label htmlFor="missing_pieces">Notes</label>
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
                  value="Add Beer"
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
export default connect(mapStateToProps, {createBeer})(BeerForm);
