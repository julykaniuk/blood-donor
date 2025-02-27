import styles from './Login.module.css';
import createAccountImage from '../../shared/assets/images/authentication.png';
import Button from "../../shared/ui/button/Button.jsx";

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.formSection}>
                <div className={styles.textSection}>
                <h1 className={styles.title}>Увійти</h1>
                <p className={styles.description}>
                    Немає акаунту? <a href="/">Створити акаунт</a>
                </p></div>

                <form className={styles.form}>
                    <label htmlFor="email">Електронна пошта або номер телефону</label>
                    <input type="email" id="email"/>
                    <label htmlFor="password">Ваш пароль</label>
                    <input type="password" id="password"/>
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
