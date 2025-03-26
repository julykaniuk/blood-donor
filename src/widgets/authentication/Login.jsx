import styles from './Login.module.css';
import createAccountImage from '../../shared/assets/images/authentication.png';
import Button from "../../shared/ui/button/Button.jsx";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.formSection}>
                <div className={styles.textSection}>
                <h1 className={styles.title}>Увійти</h1>
                <p className={styles.description}>
                    Немає акаунту?  <Link to="/sing_up">Створити акаунт</Link>
                </p></div>

                <form className={styles.form}>
                    <label className={styles.loginLabel}  htmlFor="email">Електронна пошта або номер телефону</label>
                    <input className={styles.loginInput} type="email" id="email"/>
                    <label className={styles.loginLabel} htmlFor="password">Ваш пароль</label>
                    <input className={styles.loginInput} type="password" id="password"/>
                    <Button onClick={() => console.log('Кнопка натиснута!')}>
                        Увійти
                    </Button>
                </form>

            </div>
            <div className={styles.imageSection}>
                <img src={createAccountImage} alt="Кров" />
            </div>
        </div>
    );
};

export default Login;
