
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/NavBar';
import Loader from '../../components/Loader/Loader';
import Footer from '../../components/footer/Footer';
import Background from '../../components/Background/Background';

import FadeIn from 'react-fade-in';

import { marked } from 'marked';

import styles from'./Biography.module.css';

import { data } from '../../data/biography';

import fetchData from '../../utils/api';
import i18n from '../../../i18n';

import type { Biography } from './types';

const Biography = () => {
    const [biography, setBiography] = useState <Biography | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const { t, ready } = useTranslation();
    const [content, setContent] = useState<string>('');

    const getBiography = async () => {
        try {
            const data = await fetchData<Biography[]>('biography', i18n.language);
            if (!data) return;
            setBiography(data[0]);
            setContent(await marked.parse(data[0].contentTest));
            setLoading(false);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log('Error fetching biography', error);
        }
    };

    useEffect(() => {
        getBiography();
    }, []);

    return (
        <>
            <main className={styles['page-container']}>
                <Navbar/>
                <div className={styles['header-container']}>
                    <Header content={t('biography.title')}></Header>
                </div>
                {
                    !ready || loading ?
                        <Loader />
                        :
                        <div className={styles['content-container']}>
                            <div className={styles['titles-pre-container']}>
                                <FadeIn className={styles['titles-container']}>
                                    <div>
                                        <FadeIn className={styles['biography_element']}>
                                            <h3 className={styles['title-list']}>{biography?.education.title}</h3>
                                            {biography?.education.content.map(item =>
                                                <li key={item.id} className={styles['list-container']}>{item.location}<br />{item.city} </li>
                                            )}
                                        </FadeIn>
                                    </div>
                                    <div>
                                        <FadeIn className={styles['biography_element']}>
                                            <h3 className={styles['title-list']}>{biography?.degrees.title}</h3>
                                            {biography?.degrees.content.map(item =>
                                                <li key={item.id}  className={styles['list-container']}>{item.degreeTitle}<br />{item.degreeInstitution}<br />{item.city}</li>
                                            )}
                                        </FadeIn>
                                    </div>
                                    <div>
                                        <FadeIn className={styles['biography_element']}>
                                            <h3 className={styles['title-list']}>{biography?.awards.title}</h3>
                                            {biography?.awards.content.map(item =>
                                                <li key={item.id} className={styles['list-container']}>{item.award}<br />{item.awardCompetition} {item.city}</li>
                                            )}
                                        </FadeIn>
                                    </div>
                                </FadeIn>
                            </div>
                            {biography &&
                                <section className={styles['biography-container']}>
                                    <h3 className={styles['biography-title']}>{biography.contentTitle}</h3>
                                    <FadeIn>
                                        <p className={styles['p']} dangerouslySetInnerHTML={{ __html: content }} />
                                    </FadeIn>
                                    <img className={styles['image-biography']} src={data.image} alt="Concert" />
                                    <div className={styles['text-image-container-biography']}>
                                        <p className={styles['text-image-biography']}>{biography.caption}</p>
                                    </div>
                                </section>
                            }
                        </div>
                }
                <Footer />
            </main>
            <Background />
        </>
    );
};

export default Biography;
