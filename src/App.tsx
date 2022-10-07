import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aside from './components/Aside';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import OrderPage from './pages/OrderPage';
import TablePage from './pages/TablePage';
import { login } from './redux/slices/UserSlice';


const App: React.FC = () => {
  const user = useSelector((state: {user: {name: string}}) => state.user.name);

  const dispatch = useDispatch();

  useEffect(() => {
    const data = localStorage.getItem('login');
    dispatch(login({name: data}));
  }, [])

  if (!user) {
    return <LoginPage />
  }

  return (
    <div className="app">
      <Header />
      <main className='main'>
        <Aside />
        <div className="content">
          <Routes>
            <Route path="/table" element={<TablePage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
