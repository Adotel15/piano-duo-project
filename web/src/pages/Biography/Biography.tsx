
import { useTranslation } from 'react-i18next';

import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/NavBar';
import Footer from '../../components/footer/Footer';

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
                !ready ? <p>Loading</p> :
                    <div className={styles['content-container']}>
                        <section className={styles['titles-container']}>
                            <div>
                                <ul className={styles['biography_element']}>
                                    <h3 className={styles['title-list']}>{t('biography.educationSection.header')}</h3>
                                    {educations.map(education =>
                                        <li className={styles['list-container']}>{education.school}<br />{education.location} </li>
                                    )}
                                </ul>
                            </div>
                            <div>
                                <ul className={styles['biography_element']}>
                                    <h3 className={styles['title-list']}>{t('biography.titlesSection.header')}</h3>
                                    {titles.map(titleItem =>
                                        <li className={styles['list-container']}>{titleItem.title}<br />{titleItem.school}<br />{titleItem.location}</li>
                                    )}
                                </ul>
                            </div>
                            <div>
                                <ul className={styles['biography_element']}>
                                    <h3 className={styles['title-list']}>{t('biography.awardsSection.header')}</h3>
                                    {awards.map(awardItem =>
                                        <li className={styles['list-container']}>{awardItem.award}<br />{awardItem.contest}</li>
                                    )}
                                </ul>
                            </div>
                        </section>
                        <section className={styles['biography-container']}>
                            <h3 className={styles['biography-title']}>{t('biography.biographyContent.header')}</h3>
                            <div>
                                {biography.map(paragraph=>
                                    <p className={styles['p']} dangerouslySetInnerHTML={{__html: paragraph.paragraph}} />
                                )}
                            </div>
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
