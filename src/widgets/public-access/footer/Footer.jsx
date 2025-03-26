
import styles from './footer.module.css';
import Logo from '../../../shared/assets/icons/lodo_white.svg';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLogo}>
                    <Link to="/" className="nav__logo">
                        <img src={Logo} alt='BloodHero Logo'/>
                    </Link>
                    <p className={styles.d}>
                        Донорство — це не просто акт допомоги, це можливість подарувати
                        другому життя, яке він не може отримати без вашої допомоги.
                    </p>
                </div>
                <div className={styles.footerColumn}>
                    <h3><Link to="/about_us">Про нас</Link></h3>
                    <ul>
                        <li><Link to="/article_place">Контакти</Link></li>
                        <li><Link to="faq/">Часті питання</Link></li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h3><Link to="/why">Навіщо здавати кров?</Link></h3>
                    <ul>
                        <li><Link to="/article">Групи крові</Link></li>
                        <li><Link to="/demand">Попит на різні групи крові</Link></li>
                        <li><Link to="/using">Кому ви допомагаєте</Link></li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h3><Link to="/article_place">Де здати кров?</Link></h3>
                    <ul>
                        <li><Link to="/need_donors">Потрібні донори?</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
