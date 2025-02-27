import { useState } from "react";
import styles from "./FAQSection.module.css";

const faqData = [
    {
        question: "Зі скількох років можна бути донором?",
        answer: "Донором крові в Україні можна стати з 18 років, за умови, що ви здорові та відповідаєте іншим критеріям.",
    },
    {
        question: "Якою має бути мінімальна вага людини, щоб здати кров?",
        answer: "Мінімальна вага для здачі крові — 50 кг. Це потрібно для того, щоб донор міг безпечно перенести процедуру.",
    },
    {
        question: "Коли потрібно починати підготовку до здачі крові?",
        answer: "Підготовку потрібно почати за 1-2 дні до здачі крові. Уникайте жирної, смаженої їжі та алкоголю, пийте більше води.",
    },
    {
        question: "Чи можна бути донором, якщо вживаєш ліки?",
        answer: "Це залежить від типу ліків. Деякі препарати потребують тимчасового відтермінування здачі крові. Проконсультуйтеся з лікарем.",
    },
    {
        question: "Як часто можна здавати кров?",
        answer: "Чоловіки можуть здавати кров до 5 разів на рік, жінки — до 4 разів. Між донаціями має бути не менше 60 днів.",
    },
    {
        question: "Чи потрібно їсти перед здачею крові?",
        answer: "Так, за 2-3 години до здачі крові потрібно легко перекусити. Уникайте жирної їжі та молочних продуктів.",
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.section}>
            <div className={styles.faqContainer}>
                <h1 className={styles.title}>Часті запитання про донорство</h1>
                {faqData.map((item, index) => (
                    <div key={index} className={styles.faqItem}>
                        <button
                            className={`${styles.faqQuestion} ${openIndex === index ? styles.active : ""}`}
                            onClick={() => toggleFAQ(index)}
                        >
                            {item.question} <span className={styles.icon}>{openIndex === index ? "−" : "+"}</span>
                        </button>
                        <div className={styles.faqAnswer} style={{ maxHeight: openIndex === index ? "200px" : "0px" }}>
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
