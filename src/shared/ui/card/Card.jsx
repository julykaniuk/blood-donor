import { useNavigate } from "react-router-dom";
import styles from './Card.module.css';

// eslint-disable-next-line react/prop-types
const Card = ({ image, title, description, link }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.imageBlock} />
            <h3 className={styles.cardtitle}>{title}</h3>
            <div className={styles.cardContent}>
                <div className={styles.textButtonRow}>
                    <p className={styles.textButtonRowText}>{description}</p>
                    <div className={styles.buttonWrapper}>
                        <button
                            className={styles.arrowButton}
                            onClick={() => navigate(link)}
                        >
                            <span className={styles.arrowCircle}>→</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
