import React from 'react';

import Search from '../Search';
import Notifications from '../Notifications';
import UserMenu from '../UserMenu';
import BillboardSettings from '../BillboardSettings'

import styles from './SecondaryNavigation.module.css';

const SecondaryNavigation = () => {
    return (
        <div className={styles.box}>
            <div className={styles.navItem}>
                <Search />
            </div>
            <div className={styles.navItem}>
                <Notifications />
            </div>
            <div className={styles.navItem}>
                <UserMenu />
            </div>
            <div className={styles.navItem}>
                <BillboardSettings />
            </div>
        </div>
    );
};

export default SecondaryNavigation;