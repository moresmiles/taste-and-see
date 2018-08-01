import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { createBeer, updateBeer } from '../actions/beerActions';
import { Button, Alert } from 'antd';

class BeerForm extends Component {
  constructor(props){
    super(props);

  if (this.props.option === "create") {
    this.state = {
      name: '',
      style: '',
      rating: 0,
      notes: '',
      user_id: this.props.user_id,
      errors: []
    }
} else {
  const beer = this.props.beers.find(beer => beer.id === parseInt(this.props.match.params.beerId, 10));
    this.state = {
      id: beer.id,
      name: beer.name,
      style: beer.style,
      rating: beer.rating,
      notes: beer.notes,
      user_id: this.props.user_id,
      errors: []
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
    const { name, style, rating } = this.state;

    const errors = this.validate(name, style, rating);
      if (errors.length > 0) {
        this.setState({ errors });
        return;
      }
    if (this.props.option === "create") {
      this.props.createBeer(this.state)
      this.props.history.push('/beers');
  } else if (this.props.option === "update") {
      this.props.updateBeer(this.state);
      const beerId = e.target.dataset.id;
      this.props.history.push(`/beers/${beerId}`);
    }
  }

  validate = (name, style, rating) => {
  const errors = [];
    if (this.state.name === '') {
      errors.push("Beer must have a name");
    }
    if (this.state.style === '') {
      errors.push("Beer must have a style");
    }
  return errors;
}

  render() {
    return (
      <div className="beerForm">
        <h1>New Beer</h1>
          <form onSubmit={this.handleOnSubmitBeer} data-id={this.props.match.params.beerId}>
            <div>
              {this.state.errors.map(error =>
              <Alert
                message={error}
                type="error"
                closable
                key={error}
             />
              )}
            </div>
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
                type="text"
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
                min="1"
                max="5"
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
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              >
              {this.props.option === "create" ? "Add Beer" : "Update Beer"}
            </Button>
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
