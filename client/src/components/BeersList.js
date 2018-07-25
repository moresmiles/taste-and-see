import React from 'react';
import {Link} from 'react-router-dom';
import { Card, Col, Row } from 'antd';

const BeersList = ({match, beers}) => {
  const savedBeers = (
  <div style={{ background: '#ECECEC', padding: '30px' }}>
    {beers.map(beer =>
      <Row gutter={16}>
        <Col span={8}>
          <Card title={beer.name} extra={<Link key={beer.id} to={`/beers/${beer.id}`}>More Info</Link>} bordered={true}>
            <p>{beer.style}</p>
            <p>{beer.rating}</p>
          </Card>
        </Col>
      </Row>
    )}
  </div>
)
const noBeers = (
  <div>
    <h1> You have no saved Beers </h1>
    <h2><Link to="/beers/new">New Beer</Link> </h2>

  </div>
)
return (
  <div>
    {beers.length !== 0 ? savedBeers : noBeers}
  </div>
  )
}

export default BeersList;
