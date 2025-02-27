import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./Calendar1.module.css";
import settingsBack from "../../../shared/assets/images/backroundset.png";
import Button from "../../../shared/ui/button/Button.jsx";

const Calendar1 = () => {
    const [date, setDate] = useState(new Date());

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tileClassName = ({ date, view }) => {
        if (view === "month") {
            const day = date.getDay();

            if (date < today || day === 0 || day === 6) {
                return styles.pastDate;
            }
        }
    };

    return (
        <div className={styles.container}>
            <img src={settingsBack} alt="задній фон" className={styles.back} />
            <h2 className={styles.title}>Запланувати донaцію</h2>

            <div className={styles.calendarWrapper}>
                <Calendar
                    onChange={setDate}
                    value={date}
                    locale="uk-UA"
                    tileClassName={tileClassName}
                />
            </div>

            <Button  onClick={() => console.log('Кнопка натиснута!')}>
                Обрати дату
            </Button>
        </div>
    );
};

export default Calendar1;
