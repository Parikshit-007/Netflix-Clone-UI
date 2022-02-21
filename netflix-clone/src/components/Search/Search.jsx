import React from 'react';

import SearchIcon from './SearchIcon';

import styles from './Search.module.css';

const Search = () => {
    return (
        <div className={styles.search}>
            <SearchIcon />
        </div>
    );
};

export default Search;