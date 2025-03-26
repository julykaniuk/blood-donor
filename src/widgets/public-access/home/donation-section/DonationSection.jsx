import DonationCard from "../../../../shared/ui/donation-card/DonationCard.jsx";
import styles from "./DonationSection.module.css";

import bloodDonation from "../../../../shared/assets/images/DonationSection1.png";
import plateletDonation from "../../../../shared/assets/images/DonationSection2.png";
import plasmaDonation from "../../../../shared/assets/images/DonationSection3.png";
import Button from "../../../../shared/ui/button/Button.jsx";
import {Link} from "react-router-dom";


const DonationSection = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Типи донації</h1>
            <div className={styles.donationTypes}>
                <DonationCard
                    image={bloodDonation}
                    title="Донація цільної крові"
                    description="Це процес здачі 450 мл крові для подальшого використання."
                    link="/article/whole_blood_donation"
                />
                <DonationCard
                    image={plateletDonation}
                    title="Донація тромбоцитів"
                    description="Це безпечна процедура, під час якої з крові донора відокремлюють тромбоцити."
                    link="/article/platelet_donation"
                />
                <DonationCard
                    image={plasmaDonation}
                    title="Донація плазми"
                    description="Процедура триває до 2 годин, під час якої плазму відокремлюють від крові."
                    link="/article/plasma_donation"
                />
            </div>
            <Link to={'/why'}>
            <Button onClick={() => console.log('Кнопка натиснута!')}>
                Дізнатись більше
            </Button>
        </Link>
        </div>
    );
};

export default DonationSection;
