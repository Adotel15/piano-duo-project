import { useState, useEffect } from 'react';

import Navbar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';

import styles from './Reviews.module.css';

import minImage from '../../assets/Reviews/bitcoin-icons_plus-outline.png';
import plusImage from '../../assets/Reviews/plusbtn.png';
import Loader from '../../components/Loader/Loader';

type Review = {
    id : string,
    title: string,
    content: string,
    reviewer: string,
    publisher_date: string,
    image: string,
}

const Reviews = () => {
    const [reviews, setReviews] = useState <Review[]> ([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [minimized, setMinimized] = useState<string>('-1');

    useEffect(() => {
        getReviews();
    }, []);

    const getReviews = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/reviews`);
            const { data } = await response.json();
            setReviews(data);
            setLoading(false);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Error fetching reviews', error);
        }
    };

    const openReview = (id: string) => {
        if (minimized === id) setMinimized('-1');
        else setMinimized(id);
    };

    return (
        <div className={styles['page-container']}>
            <Navbar />
            <div className={styles['container']}>
                <div>
                    <Header content='—Prensa'></Header>
                </div>
                <div className={styles['reviews-container']}>
                    {loading && <Loader />}
                    {!loading && reviews.map(review => {
                        return (
                            <section key={review.id} className={styles['review-section-container']}>
                                <div className={styles['heading-container']} onClick={() => openReview(review.id)}>
                                    <div className={styles['title-publisher-date-container']}>
                                        <div className={styles['title-container']}>
                                            <h2 className={styles['title']}>{review.title}</h2>
                                        </div>
                                        <div className={styles['publisher-date-container']}>
                                            <p className={styles['publisher-date']}>{review.publisher_date}</p>
                                        </div>
                                    </div>
                                    <img src={minimized === review.id ? minImage : plusImage}
                                        className={`${styles['min-button']} ${minimized === review.id ? styles['expanded'] : ''}`}
                                        alt={minimized === review.id ? 'minimizar' : 'expandir'}
                                    />
                                </div>
                                <div
                                    className={`${styles['content-container']} ${
                                        minimized === review.id ? styles['open'] : styles['closed']
                                    }`}
                                >
                                    <p className={styles['content']}>{review.content} <br/>{review.reviewer}</p>
                                    <div className={styles['review-image-container']}>
                                        <img className={styles['review-image']} src={review.image} alt={review.title} />
                                    </div>
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Reviews;
