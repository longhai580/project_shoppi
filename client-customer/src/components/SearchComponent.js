// SearchBarComponent.jsx

import React, { useState } from 'react';
import '../styles/search.css'; // Import file CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const SearchComponent = ({ onSearch }) => {
  const [txtKeyword, setTxtKeyword] = useState('');

  const btnSearchClick = (e) => {
    e.preventDefault();
    onSearch(txtKeyword);
  };

  return (
    <form className="search">
      <div className='search-container'>
      <input
        type="search"
        placeholder="Sản phẩm cần tìm?"
        className="keyword"
        value={txtKeyword}
        onChange={(e) => setTxtKeyword(e.target.value)}   
        />
      </div>    
      <FontAwesomeIcon icon={faMagnifyingGlass} className='search-button' onClick={btnSearchClick} />

    </form>
  );
 
};
const handleSearch = (keyword) => {
    handleSearch = (keyword) => {
    this.props.navigate('/product/search/' + keyword);
  };
};
export default SearchComponent;
