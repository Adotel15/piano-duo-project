
import { useTranslation } from 'react-i18next';

import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/NavBar';
import Loader from '../../components/Loader/Loader';
import Footer from '../../components/Footer/Footer';

import FadeIn from 'react-fade-in';

import styles from'./Biography.module.css';

import { data } from '../../data/biography';

const Biography = () => {
    const { t, ready } = useTranslation();

    const educations = t('biography.educationSection.educations', { returnObjects: true }) as { school: string, location: string }[];
    const titles = t('biography.titlesSection.titles', { returnObjects: true }) as { title: string, school: string, location: string }[];
    const awards = t('biography.awardsSection.awards', { returnObjects: true }) as { award: string, contest: string }[];
    const biography = t('biography.biographyContent.paragraphs', { returnObjects: true }) as { paragraph: string }[];

    return (
        <main className={styles['page-container']}>
            <Navbar/>
            <div className={styles['header-container']}>
                <Header content={t('biography.title')}></Header>
            </div>
            {
                !ready ?
                    <Loader />
                    :
                    <div className={styles['content-container']}>
                        <FadeIn className={styles['titles-container']}>
                            <div>
                                <FadeIn className={styles['biography_element']}>
                                    <h3 className={styles['title-list']}>{t('biography.educationSection.header')}</h3>
                                    {educations.map((education, index) =>
                                        <li key={index} className={styles['list-container']}>{education.school}<br />{education.location} </li>
                                    )}
                                </FadeIn>
                            </div>
                            <div>
                                <FadeIn className={styles['biography_element']}>
                                    <h3 className={styles['title-list']}>{t('biography.titlesSection.header')}</h3>
                                    {titles.map((titleItem, index) =>
                                        <li key={index} className={styles['list-container']}>{titleItem.title}<br />{titleItem.school}<br />{titleItem.location}</li>
                                    )}
                                </FadeIn>
                            </div>
                            <div>
                                <FadeIn className={styles['biography_element']}>
                                    <h3 className={styles['title-list']}>{t('biography.awardsSection.header')}</h3>
                                    {awards.map((awardItem, index) =>
                                        <li key={index} className={styles['list-container']}>{awardItem.award}<br />{awardItem.contest}</li>
                                    )}
                                </FadeIn>
                            </div>
                        </FadeIn>
                        <section className={styles['biography-container']}>
                            <h3 className={styles['biography-title']}>{t('biography.biographyContent.header')}</h3>
                            <FadeIn>
                                {biography.map((paragraph, index) =>
                                    <p key={index} className={styles['p']} dangerouslySetInnerHTML={{__html: paragraph.paragraph}} />
                                )}
                            </FadeIn>
                            <img className={styles['image-biography']} src={data.image} alt="Concert" />
                            <div className={styles['text-image-container-biography']}>
                                <p className={styles['text-image-biography']}>Carnegie Hall, Weill Recital Hall</p>
                            </div>
                        </section>
                    </div>
            }
            <Footer />
        </main>
    );
};

export default Biography;
