import styles from './TopBar.module.css';
import photo from '../../../shared/assets/images/avatar.png';

const TopBar = () => {
    return (
        <div className={styles.topBar}>
            <div className={styles.support}>
                <span>Підтримка</span>
            </div>
            <div className={styles.profile}>
                <img className={styles.profilePhoto} src={photo} alt="Фото профілю"/>
                <button className={styles.logoutButton}>Вийти</button>
            </div>
        </div>
    );
};

export default TopBar;
