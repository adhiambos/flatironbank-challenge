// ComponentSearchBar
import React from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm] = React.useState('');

  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search transactions..." />
  );
};

export default SearchBar;
