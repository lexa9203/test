import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/UserSlice';

const Header: React.FC = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: {user:{name: string}}) => state.user.name);
  
  const exit = () => {
    dispatch(logout());
    localStorage.removeItem('login');
    navigate("/");
  }

  return (
    <header className="header">
        <Link className='header_logo' to="/table">Тестовое задание Браво Софт</Link>
        <Link className='header_logo_mobile' to="/table">Браво Софт</Link>
        <div className='header_login'>
          <p>{user.toUpperCase()}</p>
          <button onClick={exit}>Выйти</button>
        </div>
    </header>
  );
}

export default Header;
