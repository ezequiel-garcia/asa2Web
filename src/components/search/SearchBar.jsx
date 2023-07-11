/* eslint-disable react/prop-types */
import styles from './SearchBar.module.css';
// import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchBar = ({ searchQuery, onSearch }) => {
  //   const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    // setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className={styles.searchbar}>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
      />
      <BsSearch />
    </div>
  );
};

export default SearchBar;
