import { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

const phrases = [
    '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”',
    '“Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ”',
    '“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”',
    '“Superó todas mis expectativas.”',
];

const Carousel: React.FC = () => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % phrases.length); // Cambia la frase
            // Tiempo de desvanecimiento
        }, 6000); // Tiempo total antes de cambiar de frase

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles['carousel']}>
            <p key={index} className={styles['phrase']}>
                {phrases[index]}
            </p>
        </div>
    );
};

export default Carousel;
