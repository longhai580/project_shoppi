// SearchBarComponent.jsx

import React, { useState } from 'react';
import './search.css'; // Import file CSS

const SearchComponent = ({ onSearch }) => {
  const [txtKeyword, setTxtKeyword] = useState('');

  const btnSearchClick = (e) => {
    e.preventDefault();
    onSearch(txtKeyword);
  };

  return (
    <form className="search">
      <input
        
        type="search"
        placeholder="Enter keyword"
        className="keyword"
        value={txtKeyword}
        onChange={(e) => setTxtKeyword(e.target.value)}
      
        />

      <input type="submit" value="SEARCH" onClick={btnSearchClick} />
    </form>
  );
 
};
const handleSearch = (keyword) => {
    handleSearch = (keyword) => {
    this.props.navigate('/product/search/' + keyword);
  };
};
export default SearchComponent;
