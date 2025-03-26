import styles from "./Test1.module.css";
import Button from "../../../../shared/ui/button/Button.jsx";
import { useState } from "react";
import { questions } from "./questions.jsx";

const Test1 = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answer, setAnswer] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState("");
    const [message, setMessage] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    const handleNext = () => {
        const selectedOption = questions[currentQuestion].options.find(option => option.answer === answer);
        if (selectedOption) {
            if (selectedOption.result) {
                setResult(selectedOption.result);
                setMessage(selectedOption.message);
                setShowResult(true);
            } else if (selectedOption.next !== undefined) {
                if (selectedOption.next === "complete") {
                    setIsComplete(true);
                } else {
                    setCurrentQuestion(selectedOption.next);
                    setAnswer("");
                }
            }
        }
    };

    const handleBack = () => {
        if (hasStarted && currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setAnswer("");
        } else {
            resetTest();
        }
    };

    const handleStartTest = () => {
        setHasStarted(true);
    };

    const resetTest = () => {
        setHasStarted(false);
        setCurrentQuestion(0);
        setAnswer("");
        setShowResult(false);
        setResult("");
        setMessage("");
        setIsComplete(false);
    };

    if (isComplete) {
        return (
            <div className={styles.heroSection}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Перевірка завершена</h1>
                    <p className={styles.resultMessage}>
                        Якщо ви відповіли «ні» на кожне запитання, швидше за все, ви можете зробити пожертву.
                        Якщо ви відповіли «так» на будь-яке запитання, будь ласка, дотримуйтеся наданих вказівок.
                        Ці запитання охоплюють найпоширеніші причини, чому люди не можуть зробити пожертвування, але можуть застосовуватися й інші критерії відповідності.
                    </p>
                    <p>
                        Якщо у вас виникли інші запитання, перегляньте наші вказівки щодо здоров’я та відповідності вимогам
                        або зателефонуйте нам за номером 0300 123 23 23.
                    </p>
                    <Button onClick={resetTest}>Почати знову</Button>
                </div>
            </div>
        );
    }

    if (showResult) {
        return (
            <div className={styles.heroSection}>
                <div className={styles.content}>
                    <h1 className={styles.title}>{result}</h1>
                    <p className={styles.resultMessage}>
                        {message}
                    </p>
                    <Button onClick={resetTest}>Почати знову</Button>
                </div>
            </div>
        );
    }

    if (!hasStarted) {
        return (
            <div className={styles.heroSection}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Чи можна мені здавати кров?</h1>
                    <p className={styles.description}>Лише кілька питань і трохи вашого часу, щоб дізнатися, чи ви можете стати донором крові.</p>
                    <Button onClick={handleStartTest}>
                        Пройти тест
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.heroSection}>
            <div className={styles.content}>
                <a className={styles.button} onClick={handleBack}> ← Повернутись</a>
                <h1 className={styles.title}>Питання</h1>
                <p className={styles.description}>{questions[currentQuestion].text}</p>
                <div className={styles.radioGroup}>
                    {questions[currentQuestion].options.map((option, index) => (
                        <label key={index} className={styles.description}>
                            <input
                                type="radio"
                                name="answer"
                                value={option.answer}
                                checked={answer === option.answer}
                                onChange={(e) => setAnswer(e.target.value)}
                            />
                            {option.answer}
                        </label>
                    ))}
                </div>
                <Button onClick={handleNext} disabled={!answer}>
                    Відповісти
                </Button>
            </div>
        </div>
    );
};

export default Test1;
