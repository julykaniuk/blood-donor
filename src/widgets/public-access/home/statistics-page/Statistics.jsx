import { useEffect } from 'react';
import { outNum } from '../../../../features/outNumber.js';
import styles from './Statistics.module.css';

const Statistics = () => {
    useEffect(() => {
        outNum(188404, 'out-1');
        outNum(75000, 'out-2');
        outNum(500000, 'out-3');
    }, []);

    return (
        <div className={styles.statsContainer}>
            <div className={styles.stat}>
                <div id="out-1" className={styles.number}>188 404</div>
                <div className={styles.description}>зареєстрованих донорів</div>
            </div>
            <div className={styles.stat}>
                <div id="out-2" className={styles.number}>75 000</div>
                <div className={styles.description}>життів врятовано цього року</div>
            </div>
            <div className={styles.stat}>
                <div id="out-3" className={styles.number}>500 000</div>
                <div className={styles.description}>літрів крові здали донори цього року</div>
            </div>
        </div>
    );
};

export default Statistics;
