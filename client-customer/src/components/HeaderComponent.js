import React from 'react';
import '../styles/Header.css'; // Import file CSS
import Menu from './MenuComponent';
import Inform from './InformComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

const HeaderComponent = () => {
  return (
    <div className='header-cpn'>
      <div className='search-bar'>
        <Inform />
      </div>
      <div className='header'>
        <Menu />
        <div className='header-right'>
        <FontAwesomeIcon icon={faBullhorn} />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
