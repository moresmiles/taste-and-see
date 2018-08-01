import React from 'react';
import {Link} from 'react-router-dom';
import { Row, Col, Card } from 'antd';

const BeersList = ({match, beers}) => {
  const savedBeers = (
  <div className="beersList" >
      <Row style={{padding:'30px'}}>
        {beers.map(beer =>
        <Col style={{padding:'30px'}} span={8}>
          <Card key={beer.id} title={beer.name} extra={<Link to={`/beers/${beer.id}`}>More Info</Link>}>
            <p>Style: {beer.style}</p>
            <p> Rating: {beer.rating}</p>
          </Card>
        </Col>
        )}
      </Row>
  </div>
)
const noBeers = (
  <div>
    <p> You have no saved Beers </p>
    <p><Link to="/beers/new">New Beer</Link> </p>
  </div>
)
return (
  <div>
    {beers.length !== 0 ? savedBeers : noBeers}
  </div>
  )
}

export default BeersList;
