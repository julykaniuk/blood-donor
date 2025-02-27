import styles from "./Why.module.css";
import Button from "../../../../shared/ui/button/Button.jsx";

const Section2 = () => {
    return (
        <div className={styles.section2}>
            <div className={styles.content2}>
                <h1 className={styles.title_w}>Навіщо здавати кров?</h1>
                <p className={styles.discript_w}>
                    Здача крові — це швидкий і ефективний спосіб допомогти людям, які знаходяться в критичному стані. Ваша кров може стати
                    рятівною для багатьох.

                </p>
                <Button onClick={() => console.log("Біла кнопка натиснута!")} variant="white">
                    Дізнатись більше
                </Button>
            </div>
        </div>
    );
};

export default Section2;
