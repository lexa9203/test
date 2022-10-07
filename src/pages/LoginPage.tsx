import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm';
import Notification from '../components/Notification'
import { INotificationState } from '../interfaces/app.interfaces';

const Login: React.FC = () => {
  
  const {notification, messageNotification } = useSelector((state: {notification: INotificationState}) => state.notification);
  
  return (
    <div className='login_wrapper'>
      {notification && <Notification title={messageNotification} />}
      <LoginForm />
      <div className='login_users'>
        <p>Возможные пользователи:</p>
        <ul>
          <li>ФИО: Петров П, Пароль: 0000</li>
          <li>ФИО: Сидоров С, Пароль: 0000</li>
          <li>ФИО: Иванов И, Пароль: 0000</li>
          <li>ФИО: Директор, Пароль: 0000</li>
        </ul>
      </div>
    </div>
  );
}

export default Login;
