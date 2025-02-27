import styles from "./Calendar2.module.css";
import settingsBack from "../../../shared/assets/images/backroundset.png";
import Button from "../../../shared/ui/button/Button.jsx";

const Calendar2 = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Запланувати донацію</h2>
            <img src={settingsBack} alt="задній фон" className={styles.back}/>
            <div className={styles.content}>
                <div className={styles.dateSection}>
                    <h2 className={styles.titleDate}>16 січня 2025</h2>
                    <h3>Вільні години:</h3>
                    <div className={styles.times}>
                        {["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30"].map((time, index) => (
                            <label key={index} className={styles.timeSlot}>
                                <input type="radio" name="time" defaultChecked={index === 0}/> {time}
                            </label>
                        ))}
                    </div>
                </div>
                <div className="otherContent">
                    <div className={styles.donationType}>
                        <h3>Тип донації</h3>

                        <label className={styles.checkbox}><input type="checkbox"/>Цільна кров </label>
                        <label className={styles.checkbox}><input type="checkbox"/>Тромбоцити</label>
                        <label className={styles.checkbox}><input type="checkbox"/>Плазма </label>
                        <label className={styles.checkbox}><input type="checkbox"/>Гранулоцити </label>
                    </div>
                    <p className={styles.info}>
                        Для донорства крові необхідно мати з собою паспорт та ідентифікаційний код (у разі використання
                        ID-картки – довідку про місце реєстрації).
                        Мінімальна вага донора – 50 кг.
                        Центр крові приймає лише чоловіків для здачі тромбоцитної маси.
                        Здавати тромбоконцентрат можуть тільки чоловіки.                    </p>
                    <Button onClick={() => console.log('Кнопка натиснута!')}>
                        Записатись
                    </Button>
                </div>
            </div>
        </div>
);
            };

            export default Calendar2;
