import styles from './Home.module.css';
import headerImage from '../../assets/HomePD.png';
import logoImage from '../../assets/Logo.png';

const Home = () => {
    return (
        <main>
            <div className={styles['section']}>
                <div>
                    <img src={logoImage} alt='Logo'/>
                </div>
            </div>
            <div className={styles['container_header_img']}>
                <img className={styles['header_img']} src={headerImage} alt="Pianists" />
            </div>
        </main>
    );
};

export default Home;
