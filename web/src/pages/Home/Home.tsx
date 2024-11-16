import styles from './Home.module.css';
import headerImage from '../../assets/HomePD.png';
import logoImage from '../../assets/Logo.png';
import Navbar from '../../components/Navbar/NavBar';

const Home = () => {
    return (
        <main>
            <Navbar />
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
