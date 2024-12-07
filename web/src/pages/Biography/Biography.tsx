import styles from'./Biography.module.css';
import Navbar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';

import { data } from '../../data/biography';

const Biography = () => {
    return (
        <main className={styles['page-container']}>
            <Navbar/>
            <div className={styles['header-container']}>
                <Header content='—Biografía'></Header>
            </div>
            <div className={styles['content-container']}>
                <section className={styles['titles-container']}>
                    <div>
                        <ul>
                            <h3 className={styles['title-list']}>{data.educationSection.header}</h3>
                            {data.educationSection.educations.map(education =>
                                <li>{education.school}<br />{education.location} </li>
                            )}

                        </ul>
                    </div>
                    <div>
                        <ul>
                            <h3 className={styles['title-list']}>{data.titlesSection.header}</h3>
                            {data.titlesSection.titles.map(titleItem =>
                                <li>{titleItem.title}<br />{titleItem.school}<br />{titleItem.location}</li>
                            )}
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <h3 className={styles['title-list']}>{data.awardsSection.header}</h3>
                            {data.awardsSection.awards.map(awardItem =>
                                <li>{awardItem.award}<br />{awardItem.contest}</li>
                            )}
                        </ul>
                    </div>
                </section>
                <section className={styles['biography-container']}>
                    <h3 className={styles['biography-title']}>{data.biographyContent.header}</h3>
                    <div>
                        {data.biographyContent.paragraphs.map(paragraph=>
                            <p>{paragraph.paragraph}</p>
                        )}
                    </div>
                    <img className={styles['image-biography']} src={data.image} alt="Concert" />
                </section>
            </div>
        </main>
    );
};

export default Biography;
