import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../interfaces/app.interfaces';
import { login } from '../redux/slices/UserSlice';
import { showNotification } from '../redux/slices/NotificationSlice';

const LoginForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<IUser>();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setLogin = (data: IUser) => {
    if ((data.name.toLowerCase() === 'сидоров с' && data.password === '0000') || 
        (data.name.toLowerCase() === 'петров п' && data.password === '0000') || 
        (data.name.toLowerCase() === 'иванов и' && data.password === '0000') || 
        (data.name.toLowerCase() === 'директор' && data.password === '0000')) 
    {
      dispatch(login(data));
      localStorage.setItem('login', data.name);
      reset();
      navigate('/table');
    } else {
      dispatch(showNotification({color:'red', notification: true, messageNotification: 'Вы не зарегистрированы'}));
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit(setLogin)}>
        <p className="form_label">ФИО конструктора</p>
        <input className="form_input" placeholder='Введите имя' {...register("name", { required: true })} />

        <p className="form_label">Пароль</p>
        <input type='password' className="form_input" placeholder='Введите пароль' {...register("password", { required: true })} />
        
        <input className="form_btn" type="submit" value="Отправить" />
    </form>
  );
}

export default LoginForm;
