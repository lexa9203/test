import React from 'react';
import { INotificationState } from '../interfaces/app.interfaces';
import { useSelector } from 'react-redux';
import Notification from '../components/Notification';
import OrderForm from '../components/OrderForm';

const Order: React.FC = () => {

  const {notification, messageNotification } = useSelector((state: {notification: INotificationState}) => state.notification);
  
  return (
    <div>
      {notification && <Notification title={messageNotification} />}
      <OrderForm />
    </div>
  );
}

export default Order;
