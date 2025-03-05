import styles from './Home.module.css';
import headerImage from '../../assets/HomePD.png';
import logoImage from '../../assets/Logo.png';
import Navbar from '../../components/Navbar/NavBar';

const Home = () => {
    return (
        <main>
            <div className={styles['home-navbar']}>
                <Navbar
                    isTransparent={true}
                />
            </div>
            <div className={styles['home-intro']}>
                <img
                    src={logoImage}
                    alt='Logo'
                    className={styles['home-logo']}
                />
            </div>
            <div className={styles['container-header-img']}>
                <section className={styles['content-animate']}>
                    <img
                        className={styles['header-img']}
                        src={headerImage}
                        alt="Pianists"
                    />
                </section>
            </div>
        </main>
    );
};

export default Home;
