import styles from "./DonationCard.module.css";
import arrow from "../../assets/icons/arrow-icon.svg";

// eslint-disable-next-line react/prop-types
const DonationCard = ({ image, title, description }) => {
    return (
        <div className={styles.donationCard}>
            <div className={styles.imageContainer}>
                <img src={image} alt={title} className={styles.mainImage} />
                <a href="#" className={styles.actionButton}>
                    <img src={arrow} alt="Перейти" className={styles.buttonIcon} />
                </a>
            </div>
            <h2 className={styles.donationTitle}>{title}</h2>
            <p className={styles.donationDescription}>{description}</p>
        </div>
    );
};

export default DonationCard;
