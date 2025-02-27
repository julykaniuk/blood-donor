
import styles from './footer.module.css';
import Logo from '../../../shared/assets/icons/lodo_white.svg';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLogo}>
                    <a href="#" className="nav__logo">
                        <img src={Logo} alt='BloodHero Logo'/>
                    </a>
                    <p className={styles.d}>
                        Донорство — це не просто акт допомоги, це можливість подарувати
                        другому життя, яке він не може отримати без вашої допомоги.
                    </p>
                </div>
                <div className={styles.footerColumn}>
                    <h3>Про нас</h3>
                    <ul>
                        <li><a href="#">Контакти</a></li>
                        <li><a href="#">Часті питання</a></li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h3>Навіщо здавати кров?</h3>
                    <ul>
                        <li><a href="#">Групи крові</a></li>
                        <li><a href="#">Попит на різні групи крові</a></li>
                        <li><a href="#">Типи донації</a></li>
                        <li><a href="#">Вперше здають кров</a></li>
                        <li><a href="#">Кому ви допомагаєте</a></li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h3>Де здати кров?</h3>
                    <ul>
                        <li><a href="#">Потрібні донори?</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
