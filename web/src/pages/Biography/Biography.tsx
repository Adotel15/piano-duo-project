import { useTranslation } from 'react-i18next';

import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/NavBar';
import Footer from '../../components/footer/Footer';

import styles from'./Biography.module.css';

import { data } from '../../data/biography';

const Biography = () => {
    const { t } = useTranslation();
    return (
        <main className={styles['page-container']}>
            <Navbar/>
            <div className={styles['header-container']}>
                <Header content={t('biography.title')}></Header>
            </div>
            <div className={styles['content-container']}>
                <section className={styles['titles-container']}>
                    <div>
                        <ul className={styles['biography_element']}>
                            <h3 className={styles['title-list']}>{data.educationSection.header}</h3>
                            {data.educationSection.educations.map(education =>
                                <li className={styles['list-container']}>{education.school}<br />{education.location} </li>
                            )}
                        </ul>
                    </div>
                    <div>
                        <ul className={styles['biography_element']}>
                            <h3 className={styles['title-list']}>{data.titlesSection.header}</h3>
                            {data.titlesSection.titles.map(titleItem =>
                                <li className={styles['list-container']}>{titleItem.title}<br />{titleItem.school}<br />{titleItem.location}</li>
                            )}
                        </ul>
                    </div>
                    <div>
                        <ul className={styles['biography_element']}>
                            <h3 className={styles['title-list']}>{data.awardsSection.header}</h3>
                            {data.awardsSection.awards.map(awardItem =>
                                <li className={styles['list-container']}>{awardItem.award}<br />{awardItem.contest}</li>
                            )}
                        </ul>
                    </div>
                </section>
                <section className={styles['biography-container']}>
                    <h3 className={styles['biography-title']}>{data.biographyContent.header}</h3>
                    <div>
                        {data.biographyContent.paragraphs.map(paragraph=>
                            <p className={styles['p']} dangerouslySetInnerHTML={{__html: paragraph.paragraph}} />
                        )}
                    </div>
                    <img className={styles['image-biography']} src={data.image} alt="Concert" />
                    <div className={styles['text-image-container-biography']}>
                        <p className={styles['text-image-biography']}>Carnegie Hall, Weill Recital Hall</p>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
};

export default Biography;
