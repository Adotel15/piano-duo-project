// import React from 'react';
import styles from './Home.module.css';
import headerImage from '../../assets/Playa.webp';

const Home = () => {
    return (
        <main>
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
