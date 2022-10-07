import React from 'react';
import { NavLink } from 'react-router-dom';

const Aside: React.FC = () => {
  return (
    <aside className='main-aside'> 
      <NavLink
        className='main-aside-link'
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "#282c34" : "",
            color: isActive ? "#fff" : "",
          };
        }}
        to={'order'}
      >
        Форма для заявки          
      </NavLink>
      <NavLink
        className='main-aside-link'
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "#282c34" : "",
            color: isActive ? "#fff" : "",
          };
        }}
        to={'table'}
      >
        Сводная таблица          
      </NavLink>
    </aside>   
  );
}

export default Aside;
