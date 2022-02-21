import React from 'react';

import Segment from '../Segment';

import styles from './Titles.module.css';

const Titles = () => {
    return (
        <div className={styles.titles}>
            <Segment title="Popular on Netflix" />
            <Segment title="Continue watching for Home" />
            <Segment title="Trending Now" />
            <Segment title="Watch It Again" />
        </div>
    );
};

export default Titles;