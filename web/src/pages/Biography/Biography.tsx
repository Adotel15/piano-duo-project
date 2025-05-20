
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/NavBar';
import Loader from '../../components/Loader/Loader';
import Footer from '../../components/footer/Footer';

import FadeIn from 'react-fade-in';

import styles from'./Biography.module.css';

import { data } from '../../data/biography';

import fetchData from '../../utils/api';
import i18n from '../../../i18n';

type Biography = {
    content: string;

    education: Array<{
        title: string;
        content: Array<{
            id: number;
            location: string;
            city: string;
        }>;
    }>;

    degrees: Array<{
        title: string;
        content: Array<{
            id: number;
            degree_title: string;
            degree_institution: string;
            city: string;
        }>;
    }>;

    awards: Array<{
        title: string;
        content: Array<{
            id: number;
            award: string;
            award_competition: string;
            city: string;
        }>;
    }>;

    content_title: string;
    caption: string;
}

const Biography = () => {
    const [biography, setBiography] = useState <Biography | null> (null);
    const [loading, setLoading] = useState<boolean>(true);
    const { t, ready } = useTranslation();

    /*const educations = t('biography.educationSection.educations', { returnObjects: true }) as { school: string, location: string }[];
    const titles = t('biography.titlesSection.titles', { returnObjects: true }) as { title: string, school: string, location: string }[];
    const awards = t('biography.awardsSection.awards', { returnObjects: true }) as { award: string, contest: string }[];
    const biography = t('biography.biographyContent.paragraphs', { returnObjects: true }) as { paragraph: string }[];
*/

    useEffect(() => {
        getBiography();
    }, []);

    const getBiography = async () => {
        try {
            const data = await fetchData<Biography>('biography', i18n.language);
            setBiography(data);
            if (!data) return;

            setLoading(false);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log('Error fetching biography', error);
        }
    };

    return (
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
                        <FadeIn className={styles['titles-container']}>
                            {biography?.education.map((section, index) =>
                                <div key={index}>
                                    <FadeIn className={styles['biography_element']}>
                                        <h3 className={styles['title-list']}>{section.title}</h3>
                                        {section.content.map(item =>
                                            <li key={item.id} className={styles['list-container']}>{item.location}<br />{item.city} </li>
                                        )}
                                    </FadeIn>
                                </div>
                            )}
                            {biography?.degrees.map((section, index) =>
                                <div key={index}>
                                    <FadeIn className={styles['biography_element']}>
                                        <h3 className={styles['title-list']}>{section.title}</h3>
                                        {section.content.map(item =>
                                            <li key={item.id}  className={styles['list-container']}>{item.degree_title}<br />{item.degree_institution}<br />{item.city}</li>
                                        )}
                                    </FadeIn>
                                </div>
                            )}
                            {biography?.awards.map((section, index) =>
                                <div key={index}>
                                    <FadeIn className={styles['biography_element']}>
                                        <h3 className={styles['title-list']}>{section.title}</h3>
                                        {section.content.map(item =>
                                            <li key={item.id} className={styles['list-container']}>{item.award}<br />{item.award_competition} {item.city}</li>
                                        )}
                                    </FadeIn>
                                </div>
                            )}
                        </FadeIn>
                        {biography &&
                        <section className={styles['biography-container']}>

                            <h3 className={styles['biography-title']}>{biography.content_title}</h3>
                            <FadeIn>

                                <p className={styles['p']} dangerouslySetInnerHTML={{__html: biography.content}} />

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
    );
};

export default Biography;
