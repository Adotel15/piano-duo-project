
import styles from './Home.module.css';
import headerImage from '../../assets/Playa.webp';
import Button from '../../components/Button/Button';

const Home = () => {
    const handleClick = () => {
        console.log('Menu Opened');
    };
    return (
        <main>
            <Button label="Menu" onClick={handleClick}></Button>
            <div className={styles.container_header_img}>
                <img className={styles.header_img}src={headerImage} alt="Playa" />
            </div>
            <div className={styles.section}>
                <div>Home</div>
            </div>

        </main>
    );
};

export default Home;
