import React, { Component } from 'react';
import { Card } from 'antd';

class CardPage extends Component {
  render() {
    return (
      <Card
        title="Card title"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card Content</p>
        <p>Card Content</p>
        <p>Card Content</p>
      </Card>
    );
  }
}

export default CardPage;
