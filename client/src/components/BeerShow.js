import React from 'react';
import { Button } from 'antd';

const BeerShow = ({match, beers, handleDeleteBeer, handleEditBeer}) => {
  const beer = beers.find(beer => beer.id === parseInt(match.params.beerId, 10));

  const beerInfo =
    <div className="beerShow">
      <p>{beer.name}</p>
      <p>Style: {beer.style}</p>
      <p>Rating: {beer.rating}</p>
      <p>Notes: {beer.notes}</p>
      <Button type="primary" data-id={beer.id} onClick={(e) => handleDeleteBeer(e)}>Delete</Button>
      <Button type="primary" data-id={beer.id} onClick={(e) => handleEditBeer(e)}>Edit</Button>
    </div>

  return (
    <div>
      {beerInfo}
    </div>
  )
}
export default BeerShow;
