import styles from './Siderbar.module.css';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logoCollapsed from '../../../shared/assets/icons/logoSmall.svg';
import logoExpanded from '../../../shared/assets/icons/logo.png';
import donorIcon from '../../../shared/assets/icons/donor.svg';
import calendarIcon from '../../../shared/assets/icons/calendar.svg';
import bankBloodIcon from '../../../shared/assets/icons/bankblood.svg';
import {useState} from "react";


const Siderbar = () => {
    const [activeItem, setActiveItem] = useState('home');
    const [nav, setNav] = useState(false);

    const handleClick = (id) => {
        setActiveItem(id);
    };

    return (
        <div className={`${styles.sidebar} ${nav ? styles.open : ''}`}>
            <div className={styles.menuLogo}>
                <img className={styles.logoCollapsed} src={logoCollapsed} alt="BloodHero Icon"/>
                <img className={styles.logoExpanded} src={logoExpanded} alt="BloodHero Full Logo"/>
            </div>
            <div onClick={() => setNav(!nav)} className={styles.mobileBtn}>
                {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
            </div>

            <div
                className={`${styles.menuItem} ${activeItem === 'donor' ? styles.active : ''}`}
                id="donor"
                onClick={() => handleClick('donor')}
            >
                <span className={styles.icon}>
                    <img src={donorIcon} alt="donor"/>
                </span>
                <span className={styles.text}>Донори</span>
            </div>
            <div
                className={`${styles.menuItem} ${activeItem === 'calendar' ? styles.active : ''}`}
                id="calendar"
                onClick={() => handleClick('calendar')}
            >
                <span className={styles.icon}>
                    <img src={calendarIcon} alt="Календар"/>
                </span>
                <span className={styles.text}>Календар</span>
            </div>
            <div
                className={`${styles.menuItem} ${activeItem === 'bankBlood' ? styles.active : ''}`}
                id="bankblood"
                onClick={() => handleClick('bankBlood')}
            >
                <span className={styles.icon}>
                    <img src={bankBloodIcon} alt="bankBlood"/>
                </span>
                <span className={styles.text}>Банк крові  </span>
            </div>


        </div>

    );
};

export default Siderbar;
