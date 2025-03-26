import { Link } from "react-router-dom";
import styles from "./DonationCard.module.css";
import arrow from "../../assets/icons/arrow-icon.svg";

// eslint-disable-next-line react/prop-types
const DonationCard = ({ image, title, description, link }) => {
    return (
        <div className={styles.donationCard}>
            <div className={styles.imageContainer}>
                <img src={image} alt={title} className={styles.mainImage} />
                <Link to={link} className={styles.actionButton}>
                    <img src={arrow} alt="Перейти" className={styles.buttonIcon} />
                </Link>
            </div>
            <h2 className={styles.donationTitle}>{title}</h2>
            <p className={styles.donationDescription}>{description}</p>
        </div>
    );
};

export default DonationCard;
