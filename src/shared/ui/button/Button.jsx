import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ children, onClick, variant = 'red' }) => {
    return (
        <button className={`${variant === 'white' ? styles.btn_w : styles.btn}`} onClick={onClick}>
            <span className={styles.circle}>
                <span className={styles.arrow}>→</span>
            </span>
            <span className={styles.text}>{children}</span>
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(['red', 'white'])
};

export default Button;
