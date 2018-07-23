import React from 'react';
import {Link} from 'react-router-dom';

const BeerShow = ({match, beers, handleDeleteBeer}) => {
  const beer = beers.find(beer => beer.id === parseInt(match.params.beerId, 10));

  const beerInfo =
    <div>
      <h2>{beer.name}</h2>
      <p>Style: {beer.style}</p>
      <p>Rating: {beer.rating}</p>
      <p>Notes: {beer.notes}</p>
      <button data-id={beer.id} onClick={(e) => handleDeleteBeer(e)}>Delete</button>
    </div>

  return (
    <div>
      {beerInfo}
    </div>
  )
}
export default BeerShow;
