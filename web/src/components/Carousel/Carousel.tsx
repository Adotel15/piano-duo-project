import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Carousel.module.css';

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const { t } = useTranslation();

    const phrases = t('home', { returnObjects: true }) as string[];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % phrases.length);
        }, 9000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles['carousel']}>
            <p key={index} className={styles['phrase']}>
                "{phrases[index]}"
            </p>
        </div>
    );
};

export default Carousel;
