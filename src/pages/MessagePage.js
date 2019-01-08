import React, { Component } from 'react';
import { Button, message } from 'antd';

class MessagePage extends Component {
  info = () => {
    message.info('This is a normal message.');
  };

  render() {
    return (
      <Button type="primary" onClick={this.info}>
        Display normal message
      </Button>
    );
  }
}

export default MessagePage;
