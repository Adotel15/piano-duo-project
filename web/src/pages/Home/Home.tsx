import Navbar from '../../components/Navbar/NavBar';
import Carousel from '../../components/Carousel/Carousel';

import styles from './Home.module.css';

import MainLogo from '../../assets/OfficialHeroLogo.png';
//import PianoShape from '../../assets/PianoShape.png';
import WhiteLogo from '../../assets/PianoDuoLogo.png';
import HeroImage from '../../assets/HomePD.png';

const Home = () => {
    return (
        <main className={styles['home-main']}>
            <div className={styles['home-navbar']}>
                <Navbar isTransparent={true}/>
            </div>
            <div className={styles['home-intro']}>
                <img
                    src={MainLogo}
                    alt='logo-piano-duo-web'
                    className={styles['home-logo']}
                />
            </div>
            <div className={styles['home-container-img']}>
                <section className={styles['home-content-animate']}>
                    <div className={styles['right-piano-container']}>
                        <div  className={styles['carousel-container']}>
                            <Carousel />
                        </div>
                        <img
                            className={styles['white-logo-img']}
                            src={WhiteLogo}
                            alt="White Logo"
                        />
                    </div>
                    <img
                        className={styles['home-background-img']}
                        src={HeroImage}
                        alt="Pianists"
                    />

                </section>
            </div>
        </main>
    );
};

export default Home;
