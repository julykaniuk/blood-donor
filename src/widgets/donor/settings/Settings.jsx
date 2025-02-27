import { useState } from 'react';
import styles from './Settings.module.css';
import Button from "../../../shared/ui/button/Button.jsx";
import settingsBack from "../../../shared/assets/images/backroundset.png";
import avatar from "../../../shared/assets/images/avatar.png";
import usePasswordVisibility from "../../../features/hooks/usePasswordVisibility.js";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Settings = () => {
    const [activeTab, setActiveTab] = useState('profile-settings');
    const passwordState = usePasswordVisibility();
    const confirmPasswordState = usePasswordVisibility();
    const switchTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div id="settings-page" className={`${styles.page} ${styles.active}`}>

            <img src={settingsBack} alt="задній фон" className={styles.back}/>
            <div className={styles.container}>
                <div className={styles.profile1}>
                    <img src={avatar} alt="Фото користувача" className={styles.avatar}/>

                    <h2>Імя користувача</h2>
                    <div className={styles.infoBox}>
                        <strong>Електронна адреса</strong>
                        dfghmn@fghjk.com
                    </div>
                    <div className={styles.infoBox}>
                        <strong>Стать</strong>
                        Жінка
                    </div>
                    <div className={styles.infoBox}>
                        <strong>Місце проживання</strong>
                        оролтр
                    </div>
                    <div className={styles.infoBox}>
                        <strong>Типи донaції</strong>
                        <ul>
                            <li>Цільна кров</li>
                            <li>Тромбоцити</li>
                            <li>Плазма</li>
                            <li>Гранулоцити</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.profile2}>
                    <div className={styles.tabs}>
                        <button
                            className={`${styles.tabBtn} ${activeTab === 'profile-settings' ? styles.active : ''}`}
                            onClick={() => switchTab('profile-settings')}
                        >
                            Налаштування профілю
                        </button>
                        <button
                            className={`${styles.tabBtn} ${activeTab === 'donation-settings' ? styles.active : ''}`}
                            onClick={() => switchTab('donation-settings')}
                        >
                            Налаштування типів донації
                        </button>
                    </div>

                    <div
                        id="profile-settings"
                        className={`${styles.tabContent} ${activeTab === 'profile-settings' ? styles.active : ''}`}
                    >
                        <form className={styles.formSettings}>
                            <div className={styles.column}>
                                <div className={styles.infoBox}>
                                    <label htmlFor="first_name"><strong>Імя</strong></label>
                                    <input type="text" id="first_name"/>
                                </div>
                                <div className={styles.infoBox}>
                                    <label htmlFor="last_name"><strong>Прізвище</strong></label>
                                    <input type="text" id="last_name"/>
                                </div>
                                <div className={styles.infoBox}>
                                    <label htmlFor="phone"><strong>Мобільний телефон</strong></label>
                                    <input type="text" id="phone"/>
                                </div>
                                <div className={styles.infoBox}>
                                    <label htmlFor="email"><strong>Електронна адреса</strong></label>
                                    <input type="email" id="email"/>
                                </div>
                            </div>

                            <div className={styles.column}>
                                <div className={styles.infoBox}>
                                    <label htmlFor="location"><strong>Місце проживання</strong></label>
                                    <input type="text" id="location"/>
                                </div>
                                <div className={styles.infoBox}>
                                    <label htmlFor="sex"><strong>Стать</strong></label>
                                    <select id="sex">
                                        <option value="жінка">Жінка</option>
                                        <option value="чоловік">Чоловік</option>
                                        <option value="інше">Інше</option>
                                    </select>
                                </div>
                                <div className={styles.infoBox}>
                                    <label htmlFor="password"><strong>Змінити пароль</strong></label>
                                    <div className={styles.passwordContainer}>
                                        <input
                                            type={passwordState.isVisible ? "text" : "password"}
                                            id="password"
                                        />
                                        <button type="button" onClick={passwordState.toggleVisibility}>
                                            {passwordState.isVisible ?
                                                <AiFillEyeInvisible color="rgba(134, 4, 14, 1)"/> :
                                                <AiFillEye color="rgba(134, 4, 14, 1)"/>}
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.infoBox}>
                                    <label htmlFor="confirm_password"><strong>Підтвердіть пароль</strong></label>
                                    <div className={styles.passwordContainer}>
                                        <input
                                            type={confirmPasswordState.isVisible ? "text" : "password"}
                                            id="confirm_password"
                                        />
                                        <button type="button" onClick={confirmPasswordState.toggleVisibility}>
                                            {confirmPasswordState.isVisible ?
                                                <AiFillEyeInvisible color="rgba(134, 4, 14, 1)" size={20}/> :
                                                <AiFillEye color="rgba(134, 4, 14, 1)" size={20}/>
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <Button onClick={() => console.log('Кнопка натиснута!')}>
                                Оновити
                            </Button>
                        </form>
                    </div>

                    <div
                        id="donation-settings"
                        className={`${styles.tabContent} ${activeTab === 'donation-settings' ? styles.active : ''}`}
                    >
                        <form>
                            <div className={styles.infoBox}>
                                <label htmlFor="blood_group"><strong>Група крові</strong></label>
                                <select
                                    id="blood_group"
                                >
                                    <option value="">Оберіть групу крові</option>
                                    <option value="0">0 (I)</option>
                                    <option value="A">A (II)</option>
                                    <option value="B">B (III)</option>
                                    <option value="AB">AB (IV)</option>
                                </select>
                            </div>
                            <div className={styles.infoBox}>
                                <label htmlFor="rhesus_factor"><strong>Резус-фактор</strong></label>
                                <select
                                    id="rhesus_factor"
                                >
                                    <option value="">Оберіть резус-фактор</option>
                                    <option value="+">Позитивний (+)</option>
                                    <option value="-">Негативний (-)</option>
                                </select>
                            </div>
                            <div className={styles.infoBox}>
                                <strong>Типи донaції</strong>
                                <div className={styles.toggleGroup}>
                                    <label>Цільна кров <input type="checkbox"/></label>
                                    <label>Тромбоцити <input type="checkbox"/></label>
                                    <label>Плазма <input type="checkbox"/></label>
                                    <label>Гранулоцити <input type="checkbox"/></label>
                                </div>
                            </div>
                            <Button onClick={() => console.log('Кнопка натиснута!')}>
                                Оновити
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
