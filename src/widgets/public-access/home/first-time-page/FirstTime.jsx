import styles from "./FirstTime.module.css";
import firstTimeImage from "../../../../shared/assets/images/FirstTime.svg";
import firstTimeImage480 from "../../../../shared/assets/images/FirstTime480.svg";

const FirstTime = () => {
    const isMobile = window.innerWidth <= 480;

    return (
        <div className={styles.section4}>
            <div className={styles.content4}>
                <h1 className={styles.title_c}>Здача крові вперше</h1>
                <img
                    src={isMobile ? firstTimeImage480 : firstTimeImage}
                    alt="Image description"
                    className={styles.image}
                />
            </div>
        </div>
    );
};

export default FirstTime;
