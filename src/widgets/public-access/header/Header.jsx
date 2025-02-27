import { useState } from 'react';
import style from './Header.module.css';
import Logo from '../../../shared/assets/icons/logo.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    const [nav, setNav] = useState(false);

    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.box}>
                    <div className={style.nav__logo}>
                        <img src={Logo} alt='BloodHero Logo' />
                    </div>
                    <ul
                        className={nav ? [style.menu, style.active].join(' ') : style.menu}
                    >
                        <li className={style.nav__item}>
                            <a href="#" className={style.nav__link}>
                                <span>Про нас</span>
                            </a>
                        </li>

                        <li className={style.nav__item}>
                            <a href="#" className={style.nav__link}>
                                <span>Навіщо здавати кров?</span>
                            </a>
                        </li>

                        <li className={style.nav__item}>
                            <a href="#" className={style.nav__link}>
                                <span>Де здати кров?</span>
                            </a>
                        </li>

                        <li className={style.nav__item}>
                            <a href="#" className={style.nav__link}>
                                <span>Потрібні донори?</span>
                            </a>
                        </li>

                        <li className={style.nav__item}>
                            <a href="#" className={`${style.nav__link} ${style.nav__button}`}>
                                <span>Кабінет донора →</span>
                            </a>
                        </li>
                    </ul>
                    <div onClick={() => setNav(!nav)} className={style.mobileBtn}>
                        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25}/>}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
