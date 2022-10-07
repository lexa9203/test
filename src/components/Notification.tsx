import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideNotification } from '../redux/slices/NotificationSlice';

const Notification: React.FC<{title: string}> = ({title}) => {
  
  const dispatch = useDispatch();
  const BGColor = useSelector((state: {notification: {color: string}}) => state.notification.color);

  const close = () => {
    dispatch(hideNotification());
  }

  return (
    <div style={{backgroundColor: BGColor}} className='notification_wrapper'>
        <p>{title}</p>
        <button onClick={close}>&#10006;</button>
    </div>
  );
}

export default Notification;
