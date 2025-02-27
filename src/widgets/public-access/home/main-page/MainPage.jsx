
import styles from './MainPage.module.css';
import Button from "../../../../shared/ui/button/Button.jsx";

const MainPage = () => {
    return (
        <div className={styles.heroSection}>
            <div className={styles.content}>
                <h1 className={styles.title}>Будьте надією для тих, хто чекає</h1>
                <p className={styles.description}>Донація крові – це ваш внесок у порятунок життів.</p>
                <Button onClick={() => console.log('Кнопка натиснута!')}>
                    Стати донором
                </Button>

            </div>
        </div>
    );
};

export default MainPage;
