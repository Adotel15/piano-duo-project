import { useState, useEffect } from 'react';

import styles from './Carousel.module.css';

const Carousel = (
    { headlines }:
    { headlines:{ author: string, content: string}[] }
) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (headlines.length <= 1) return;

        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % headlines.length);
        }, 9000);

        return () => clearInterval(interval);
    }, [headlines.length]);

    useEffect(() => {
        setIndex(0);
    }, [headlines]);

    if (headlines.length === 0) {
        return null;
    }

    return (
        <div className={styles['carousel']}>
            <div key={`${index}-${headlines[index]?.content}`} className={styles['phrase-container']}>
                <p className={styles['phrase']}>
                    "{headlines[index].content}"
                </p>
                <p className={styles['author']}>{headlines[index].author}</p>
            </div>
        </div>
    );
};

export default Carousel;
