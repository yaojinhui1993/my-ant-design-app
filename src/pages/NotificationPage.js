import React, { Component } from 'react';
import { Button, notification } from 'antd';

class NotificationPage extends Component {
  openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  render() {
    return (
      <Button type="primary" onClick={this.openNotification}>
        Open the notification box
      </Button>
    );
  }
}

export default NotificationPage;
