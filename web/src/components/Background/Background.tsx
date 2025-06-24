import styles from './Background.module.css';
import BackgroundImage from '../../assets/background.svg';

const Background = () => {
    return (
        <div className={styles['background-container']}>
            <img
                src={BackgroundImage}
                alt="Background"
            />
        </div>
    );
};

export default Background;
