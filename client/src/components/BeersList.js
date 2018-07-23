import React from 'react';
import {Link} from 'react-router-dom';

const BeersList = ({match, beers}) => {
  return (
    <div>
      {beers.map(beer =>
        <Link key={beer.id} to={`/beers/${beer.id}`}>
          {beer.name} - {beer.style}
          {beer.rating}
        </Link>
      )}
    </div>
  )
}

export default BeersList;
