
import styles from './Form.module.css';
import Button from "../../../../shared/ui/button/Button.jsx";

const Form = () => {

    return (
        <div className={styles.formContainer}>
            <h1 className={styles.title}>Інформація про реципієнта</h1>
            <form action="#" method="post">
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="surname">Прізвище</label>
                        <input className={styles.formElement} type="text" id="surname" name="surname" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="name">Імя</label>
                        <input  className={styles.formElement} type="text" id="name" name="name" required />
                    </div>
                </div>
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="middle-name">По батькові</label>
                        <input className={styles.formElement} type="text" id="middle-name" name="middle-name" />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="birth-date">Дата народження</label>
                        <input className={styles.formElement} type="date" id="birth-date" name="birth-date" />
                    </div>
                </div>
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="donation-type">Тип донації</label>
                        <select className={styles.formElement} id="donation-type" name="donation-type" required>
                            <option value="" disabled>Вибери зі списку</option>
                            <option value="whole-blood">Донація цільної крові</option>
                            <option value="platelets">Донація тромбоцитів</option>
                            <option value="plasma">Донація плазми</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="blood-group">Група крові</label>
                        <select className={styles.formElement} id="blood-group" name="blood-group" required>
                            <option value="" disabled>Вибери зі списку</option>
                            <option value="1">O (I)</option>
                            <option value="2">O- (I-)</option>
                            <option value="3">A (II)</option>
                            <option value="4">A- (II-)</option>
                            <option value="5">B (III)</option>
                            <option value="6">B- (III-)</option>
                            <option value="7">AB (IV)</option>
                            <option value="8">AB- (IV-)</option>
                        </select>
                    </div>
                </div>
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="disease">Хвороба</label>
                        <input className={styles.formElement} id="disease" name="disease">
                        </input>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="blood-center">Центр крові</label>
                        <input className={styles.formElement} id="blood-center" name="blood-center">

                        </input>
                    </div>
                </div>
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="treatment-place">Місце лікування</label>
                        <input className={styles.formElement} type="text" id="treatment-place" name="treatment-place" />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="donor-count">Необхідна кількість донорів</label>
                        <input className={styles.formElement} type="number" id="donor-count" name="donor-count" />
                    </div>
                </div>
                <div className={styles.formRow}>
                    <div className={styles.formGroupFullWidth}>
                        <label className={styles.formLabel} htmlFor="situation">Опишіть вашу ситуацію</label>
                        <textarea className={styles.formElement1} id="situation" name="situation" rows="4"></textarea>
                    </div>
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="phone">Телефон</label>
                        <input  className={styles.formElement} type="tel" id="phone" name="phone" placeholder="+38 (__) ___-__-__" />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="email">Електронна адреса</label>
                        <input className={styles.formElement} type="email" id="email" name="email" />
                    </div>
                </div>
                <Button onClick={() => console.log('Кнопка натиснута!')}>
                    Надіслати
                </Button>
            </form>
        </div>
    );
};

export default Form;
