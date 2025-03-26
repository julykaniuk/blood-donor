import { useState, useEffect } from 'react';
import styles from './Sidebar.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logoCollapsed from '../../../shared/assets/icons/logoSmall.svg';
import logoExpanded from '../../../shared/assets/icons/logo.png';
import homeIcon from '../../../shared/assets/icons/home.svg';
import calendarIcon from '../../../shared/assets/icons/calendar.svg';
import settingsIcon from '../../../shared/assets/icons/set.svg';
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const [nav, setNav] = useState(false);
    const location = useLocation();
    const [activeItem, setActiveItem] = useState(location.pathname);

    useEffect(() => {
        setActiveItem(location.pathname);
    }, [location]);

    return (
        <div className={`${styles.donorSidebar} ${nav ? styles.open : ''}`}>
            <div className={styles.menuLogo}>
                <img className={styles.logoCollapsed} src={logoCollapsed} alt="BloodHero Icon"/>
                <img className={styles.logoExpanded} src={logoExpanded} alt="BloodHero Full Logo"/>
            </div>
            <div onClick={() => setNav(!nav)} className={styles.mobileBtn}>
                {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
            </div>
            <Link to="/donor/home" className={styles.link}>
            <div
                className={`${styles.donorItem} ${activeItem === '/donor/home' ? styles.active : ''}`}
                id="home"
            >

                    <span className={styles.icon}>
                        <img src={homeIcon} alt="home"/>
                    </span>
                    <span className={styles.text}>Головна</span>

            </div></Link>
            <Link to="/donor/calendar" className={styles.link}><div
                className={`${styles.donorItem} ${activeItem === '/donor/calendar' || activeItem === '/donor/calendar1' ? styles.active : ''}`}
                id="calendar"
            >

                    <span className={styles.icon}>
                        <img src={calendarIcon} alt="Календар"/>
                    </span>
                    <span className={styles.text}>Календар</span>

            </div>
        </Link>
            <Link to="/donor/settings" className={styles.link}> <div
                className={`${styles.donorItem} ${activeItem === '/donor/settings' ? styles.active : ''}`}
                id="settings"
            >

                    <span className={styles.icon}>
                        <img src={settingsIcon} alt="Налаштування"/>
                    </span>
                    <span className={styles.text}>Налаштування</span>

            </div>
        </Link>        </div>
    );
};

export default Sidebar;
