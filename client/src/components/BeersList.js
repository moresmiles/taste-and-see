import React from 'react';
import {Link} from 'react-router-dom';
import { Row, Col, Card, Button } from 'antd';

const BeersList = ({match, beers}) => {
  const savedBeers = (
  <div>
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
    <Button type="primary" size="large"><Link to="/beers/new">New Beer</Link></Button>
  </div>
)
return (
  <div className="beersList">
    {beers.length !== 0 ? savedBeers : noBeers}
  </div>
  )
}

export default BeersList;
