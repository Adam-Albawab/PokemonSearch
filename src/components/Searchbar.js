import React, { useState } from 'react';
import '../styles/Searchbar.css';
import '../styles/index.css';

const Searchbar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchInput);
  };

  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input className='search-input'
        type="text"
        placeholder="Search for a Pokemon"
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      <button className='search-button' type="submit">Search</button>
    </form>
  );
};

export default Searchbar;