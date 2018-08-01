import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBeers, deleteBeer } from '../actions/beerActions';
import BeerShow from '../components/BeerShow'
import BeerForm from './BeerForm';
import BeersList from '../components/BeersList';

class BeersContainer extends Component {
  constructor(props) {
    super();

    this.state = {
      beers: props.beerState.beers
    }
  }

  componentDidMount() {
    this.props.fetchBeers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.beerState.beers !== prevProps.beerState.beers) {
      this.setState({
        beers: this.props.beerState.beers
      })
    }
  }

  handleEditBeer = (e) => {
    e.preventDefault();
    const beerId = e.target.dataset.id
    this.props.history.push(`/beers/${beerId}/edit`)
  }

  handleDeleteBeer = (e) => {
    e.preventDefault();
    window.confirm("Are you sure you want to delete this beer?")
    const beerId = e.target.dataset.id
    this.props.deleteBeer(beerId);
    this.props.history.push('/beers');
  }

render() {
  const beers = this.state.beers.filter(beer => beer.user_id === this.props.userId)
  const beersDiv = (
  <div>
    <Switch>
      <Route
        exact path="/beers/new"
        render={() =>
          <BeerForm option="create" />
          }
      />
      <Route
        exact path={`${this.props.match.url}/:beerId`}
        render={ (props) =>
          <BeerShow
            beers={beers}
            handleDeleteBeer={this.handleDeleteBeer}
            handleEditBeer={this.handleEditBeer}
            {...props}
            />
          }
        />
        <Route
          path={`${this.props.match.url}/:beerId/edit`}
          render={() => <BeerForm option="update" beers={beers} />}
        />
        <Route
          exact path={this.props.match.url}
          render={() => <BeersList beers={beers} />}
        />
      </Switch>
    </div>
  )

  return (
    <div>
      { beersDiv }
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    beerState: state.beers,
    userId: state.user.currentUser.id
  }
}

export default connect(mapStateToProps, {fetchBeers, deleteBeer})(BeersContainer);
