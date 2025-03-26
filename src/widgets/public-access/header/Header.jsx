import { useState } from 'react';
import style from './Header.module.css';
import Logo from '../../../shared/assets/icons/logo.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {Link} from "react-router-dom";

const Header = () => {
    const [nav, setNav] = useState(false);

    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.box}>
                    <Link to="/" className={style.nav__logo}>
                        <img src={Logo} alt='BloodHero Logo' />
                    </Link>
                    <ul
                        className={nav ? [style.menu, style.active].join(' ') : style.menu}
                    >
                        <li className={style.nav__item}>
                            <Link to="/about_us" className={style.nav__link}>
                                <span>Про нас</span>
                            </Link>
                        </li>

                        <li className={style.nav__item}>
                            <Link to="/why" className={style.nav__link}>
                                <span>Навіщо здавати кров?</span>
                            </Link>
                        </li>

                        <li className={style.nav__item}>
                            <Link to="/article_place" className={style.nav__link}>
                                <span>Де здати кров?</span>
                            </Link>
                        </li>

                        <li className={style.nav__item}>
                            <Link to="/need_donors" className={style.nav__link}>
                                <span>Потрібні донори?</span>
                            </Link>
                        </li>

                        <li className={style.nav__item}>

                            <Link to="/login"  className={`${style.nav__link} ${style.nav__button}`}>
                                <span>Кабінет донора →</span>
                            </Link>
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
