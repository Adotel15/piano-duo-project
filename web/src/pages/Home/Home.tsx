import { useEffect, useState } from 'react';

import Navbar from '../../components/Navbar/NavBar';
import Carousel from '../../components/Carousel/Carousel';

import styles from './Home.module.css';

import GoldLogo from '../../assets/logo-gold.svg';
import HeroImage from '../../assets/home-pd.png';
import HeroImageTablet from '../../assets/home-pd-tablet.png';
import HeroImageMobile from '../../assets/home-pd-mobile.png';

import fetchData from '../../utils/api';
import i18n from '../../../i18n';

interface Headline {
    author: string;
    content: string;
}

const Home = () => {
    const [headlines, setHeadlines] = useState<Headline[]>([]);

    const getHeadline = async () => {
        try {
            const data = await fetchData<Headline[]>('headline', i18n.language);
            if (!data) return;
            setHeadlines(data);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Error fetching phrases', error);
        }
    };

    useEffect(() => {
        getHeadline();
    }, []);

    return (
        <main className={styles['home-main']}>
            <div className={styles['home-navbar']}>
                <Navbar/>
            </div>
            <div className={styles['home-container-img']}>
                <div className={styles['right-piano-container']}>
                    <div className={styles['carousel-container']}>
                        <Carousel headlines={headlines}/>
                        <img
                            className={styles['white-logo-img']}
                            src={GoldLogo}
                            alt="piano-duo-logo-gold"
                        />
                        {/* <img
                            className={styles['background-design-img']}
                            src={BackgroundDesign}
                            alt="background-design"
                        /> */}
                    </div>
                </div>
                <img
                    className={styles['home-background-img']}
                    src={HeroImage}
                    alt="Pianists"
                />
                <img
                    className={styles['home-background-img-tablet']}
                    src={HeroImageTablet}
                    alt="Pianists"
                />
                <img
                    className={styles['home-background-img-mobile']}
                    src={HeroImageMobile}
                    alt="Pianists"
                />
            </div>
        </main>
    );
};

export default Home;
