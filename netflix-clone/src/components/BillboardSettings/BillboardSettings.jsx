import React from 'react';

import SettingsIcon from './SettingsIcon';
import styles from './BillboardSettings.module.css';

const BillboardSettings = () => {
    return (
        <div className={styles.BillboardSettings}>
            <SettingsIcon />
        </div>
    );
};

export default BillboardSettings;