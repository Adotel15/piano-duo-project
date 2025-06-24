import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import FadeIn from 'react-fade-in';

import Navbar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import Footer from '../../components/footer/Footer';

import styles from './Reviews.module.css';

import minImage from '../../assets/Reviews/bitcoin-icons_plus-outline.png';
import plusImage from '../../assets/Reviews/plusbtn.png';

import fetchData from '../../utils/api';
import i18n from '../../../i18n';

type Review = {
    id : string,
    title: string,
    content: string,
    reviewer: string,
    publisher_date: string,
    image: string,
}

const Reviews = () => {
    const [reviews, setReviews] = useState <Review[] | null> ([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [minimized, setMinimized] = useState<string>('-1');

    const { t } = useTranslation();

    useEffect(() => {
        getReviews();
    }, []);

    const getReviews = async () => {
        try {
            const data = await fetchData<Review[]>('reviews', i18n.language);
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
                    <Header content={t('reviews.title')}></Header>
                </div>
                <FadeIn className={styles['reviews-container']}>
                    {loading && <Loader />}
                    {/** This should not happen */}
                    {!loading && (reviews?.length === 0 || !reviews) && <p>Language not translated</p>}
                    {!loading && reviews && reviews.map((review, index) => {
                        return (
                            <section key={review.id} className={`${styles['review-section-container']} ${index % 2 === 0 ? styles['review-section-dark'] : styles['review-section-light']}`}>
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
                                    {review.image ?
                                        <>
                                            <div className={styles['review-image-container']}>
                                                <img className={`${styles['review-image']} `} src={review.image} alt={review.title} />
                                            </div>
                                        </>
                                        :
                                        ''
                                    }
                                </div>
                            </section>
                        );
                    })}
                </FadeIn>
            </div>
            <Footer />
        </div>
    );
};

export default Reviews;
