
import React from 'react';

import SecondaryNavigation from '../SecondaryNavigation';
import logo from './assets/logo.png';
import styles from './Navigation.module.css';

const Navigation = () => {
    const navItems = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'];

    return (
        <div className={styles.navigation}>
            <div className={styles.mainNavigation}>
                <img className={styles.logo} src={logo} alt="logo" />
                <ul className={styles.navigationList}>
                    {navItems.map(item => (
                        <li className={styles.navigationItem} key={item}>
                            <a href="/">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <SecondaryNavigation />
        </div>
    );
};

export default Navigation;