import styles from "./Contact.module.css";
import contactImage from "../../../shared/assets/images/Contact.png";

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactInfo}>
                <div>
                    <h1 className={styles.title}>Наші контакти</h1>
                    <p className={styles.discr}>Звертайтесь з будь-якими питаннями</p>
                </div>
                <div className={styles.details}>
                    <strong>Електронна адреса:</strong>
                    <p><a href="mailto:info@donorkrov.ua">info@donorkrov.ua</a></p>

                    <strong>Номер телефону:</strong>
                    <p><a href="tel:+3805982684598">+3805982684598</a></p>

                    <strong>Адреса:</strong>
                    <p>
                        вул. Здоровя, 10, м. Ужгород,<br/>
                        Закарпатська область, 88000, Україна
                    </p>
                    <div className={styles.contactImage}>
                        <img src={contactImage} alt="Контактне фото"/>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Contact;
