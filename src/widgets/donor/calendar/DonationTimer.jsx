import { useState } from "react";
import styles from "./DonationTimer.module.css";

const DonationTimer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [donationPeriod, setDonationPeriod] = useState("");

    const options = [
        { label: "Трансфузії компонентів крові", period: 365 },
        { label: "Період вагітності та лактації", period: 365 },
        { label: "Операції, у тому числі аборти", period: 365 },
        { label: "Нанесення татуювання, проколювання вух, пірсинг", period: 365 },
        { label: "Перебування в закордонних відрядженнях", period: 180 },
        { label: "Перебування в ендемічних з малярії країнах", period: 1095 },
        { label: "Контакт з хворими на гепатит А", period: 90 },
        { label: "Контакт з хворими на гепатит В, С", period: 365 },
        { label: "Перенесені інфекційні захворювання (малярія, черевний тиф)", period: 365 },
        { label: "Гострі або хронічні запальні процеси", period: 30 },
        { label: "Алергічні захворювання", period: 60 },
        { label: "Видалення зуба", period: 10 },
        { label: "Щеплення (вбитими та рекомбінантними вакцинами)", period: 10 },
        { label: "Щеплення (живими вакцинами)", period: 30 },
        { label: "Щеплення від сказу", period: 365 },
        { label: "Реакція Манту", period: 14 },
        { label: "Медикаментозний курс лікування", period: 14 },
        { label: "Період менструації", period: 5 },
        { label: "Вживання алкоголю", period: 2 },
    ];

    const handleCheckboxChange = (option) => {
        const updatedSelectedOptions = selectedOptions.includes(option)
            ? selectedOptions.filter(item => item !== option)
            : [...selectedOptions, option];

        setSelectedOptions(updatedSelectedOptions);

        const totalDays = updatedSelectedOptions.reduce((acc, option) => {
            const selectedOption = options.find(o => o.label === option);
            return acc + (selectedOption ? selectedOption.period : 0);
        }, 0);

        setDonationPeriod(totalDays);
    };

    return (
        <div className={styles.donationTimerConteiner}>
            <div className={styles.donationTimerCont}>
                <h2>Коли можна планувати наступну донацію?</h2>
                <hr className={styles.divider}/>
                <p className={styles.donationTimerCross}>Через</p>
                <p className={styles.donationTimerDate}>{donationPeriod} </p>
                <p className={styles.donationTimerDays}>днів</p>

                <p className={styles.donationTimerEdit} onClick={() => setIsModalOpen(true)}>Редагувати</p>
            </div>
            {isModalOpen && (
                <div className={styles.donationTimerModalConteiner}>
                    <div className={styles.modal}>
                        <div className={styles.modalContent}>
                            <h3>Виберіть період</h3>
                            <ul>
                                {options.map(option => (
                                    <li key={option.label}>
                                        <label>
                                            <input
                                                type="checkbox"
                                                value={option.label}
                                                checked={selectedOptions.includes(option.label)}
                                                onChange={() => handleCheckboxChange(option.label)}
                                            />
                                            {option.label}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                            <button onClick={() => setIsModalOpen(false)}>Вибрати</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DonationTimer;
