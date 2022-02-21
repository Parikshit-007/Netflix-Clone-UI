import React from 'react';

import ChevronRightIcon from './ChevronRightIcon';

import placeholderImg from './assets/thumbnail-top10-h.jpg';
import styles from './Segment.module.css';

const Segment = ({ title }) => {
    return (
        <div className={styles.segment}>
            <p className={styles.title}>
                {title}
                <span className={styles.icon}>
                    <svg width="8" height="8" viewBox="0 0 23 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.5 3L21 20.5L3.5 38"
                            stroke="white"
                            stroke-width="4"
                            stroke-linecap="square"
                            stroke-linejoin="round"
                        />
                    </svg>
                </span>
            </p>
            <div className={styles.row}>
                <img src={placeholderImg} alt="" />
                <img src={placeholderImg} alt="" />
                <img src={placeholderImg} alt="" />
                <img src={placeholderImg} alt="" />
                <img src={placeholderImg} alt="" />
                <button className={styles.button}>
                    <ChevronRightIcon />
                </button>
            </div>
        </div>
    );
};

export default Segment;