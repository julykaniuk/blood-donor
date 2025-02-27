import styles from "./Home.module.css";
import photo from '../../../shared/assets/images/avatar.png';
import {useState} from "react";
const donations = [
    { id: 1, date: "29", month: "Вер", name: "Закарпатська обласна станція переливання крові", address: "вул. Л. Толстого, 15", city: "Ужгород", bloodType: "Цільна кров", status: "виконане" },
    { id: 2, date: "30", month: "Жов", name: "Закарпатська обласна станція переливання крові", address: "вул. Л. Толстого, 15", city: "Ужгород", bloodType: "Плазма", status: "заплановане" },
    { id: 3, date: "5", month: "Лис", name: "Закарпатська обласна станція переливання крові", address: "вул. Л. Толстого, 15", city: "Ужгород", bloodType: "Тромбоцити", status: "заплановане" },
    { id: 4, date: "10", month: "Лис", name: "Закарпатська обласна станція переливання крові", address: "вул. Л. Толстого, 15", city: "Ужгород", bloodType: "Цільна кров", status: "виконане" },
    { id: 5, date: "15", month: "Лис", name: "Закарпатська обласна станція переливання крові", address: "вул. Л. Толстого, 15", city: "Ужгород", bloodType: "Плазма", status: "заплановане" },
    { id: 6, date: "20", month: "Лис", name: "Закарпатська обласна станція переливання крові", address: "вул. Л. Толстого, 15", city: "Ужгород",bloodType: "Цільна кров", status: "заплановане" }
];

const ITEMS_PER_PAGE = 4;

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(donations.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const displayedDonations = donations.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <div id="home-page" className={`${styles.page} `}>
            <div className={styles.containerHomePage}>
                <div className={styles.leftColumn}>
                    <div className={styles.profileHomePage}>
                        <div className={styles.avatarHomePage}>
                            <img className={styles.avatarHomePagePhoto} src={photo} alt="Фото користувача"/>
                        </div>
                        <h2 className={styles.username}>Імя користувача</h2>
                        <p className={styles.age}>скільки років</p>
                        <div className={styles.userInfo}>
                            <div className={styles.labels}>
                                <b className={styles.label}>Кров</b>
                                <b className={styles.label}>Ріст</b>
                                <b className={styles.label}>Вага</b>
                            </div>
                            <div className={styles.values}>
                                <span className={`${styles.value} `}>-A</span>
                                <span className={`${styles.value} `}>175</span>
                                <span className={`${styles.value} `}>65</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.stats}>
                        {["Всі донації", "Скасовані", "Виконані", "Заплановані"].map((title, index) => (
                            <div key={index} className={styles.stat}>
                                <p className={styles.num}>{[5, 1, 2, 2][index]}</p>
                                <p className={styles.statDis}>{title}</p>
                                <div className={styles.chart}>
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i}></div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.advertisement}>
                        <h2 className={styles.advertisementTitle}>Оголошення</h2>
                        <p className={styles.advertisementInfo}>Потрібні такі групи крові II-</p>
                    </div>
                </div>

                <div className={styles.rightColumn}>
                    <div className={styles.donationsHomePage}>
                        <h2>Донації</h2>
                        <hr className={styles.divider}/>
                        {displayedDonations.map((donation) => (
                            <div key={donation.id} className={styles.donationItemHomePage}>
                                <div>
                                    <p className={styles.date}>{donation.date}</p>
                                    <p className={styles.month}>{donation.month}</p>
                                </div>
                                <div>
                                    <p className={styles.name}>{donation.name}</p>
                                    <p className={styles.address}>{donation.address}</p>
                                </div>
                                <p className={styles.city}>{donation.city}</p>
                                <p className={styles.bloodType}>{donation.bloodType}</p>
                                <span
                                    className={`${styles.status} ${
                                        donation.status === "виконане" ? styles.done :
                                            donation.status === "скасоване" ? styles.cancelled :
                                                styles.planned
                                    }`}
                                >
    {donation.status}
</span>

                            </div>
                        ))}
                        {totalPages > 1 && (
                            <div className={styles.pagination}>
                                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                                    Назад
                                </button>
                                <span>{currentPage} / {totalPages}</span>
                                <button onClick={() => setCurrentPage(currentPage + 1)}
                                        disabled={currentPage === totalPages}>
                                    Вперед
                                </button>
                            </div>
                        )}
                    </div>

                    <div className={styles.donationTypesHomePage}>
                        <h2>Типи донації</h2>
                        <hr className={styles.divider}/>
                        <p>донацій</p>
                        <div className={styles.progress}>
                            {["wholeBlood", "platelets", "plasma", "granulocytes"].map((type, index) => (
                                <div key={index} className={`${styles.bar} ${styles[type]}`}
                                     style={{width: `${[30, 20, 40, 10][index]}%`}}></div>
                            ))}
                        </div>
                        <div className={styles.progressLabels}>
                            {["Цільна кров", "Тромбоцити", "Плазма", "Гранулоцити"].map((label, index) => (
                                <div key={index} className={styles.label}>
                                    <span
                                        className={`${styles.l} ${styles[["wholeBlood", "platelets", "plasma", "granulocytes"][index]]}`}>0</span> {label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
