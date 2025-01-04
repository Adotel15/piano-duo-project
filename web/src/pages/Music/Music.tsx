import styles from './Music.module.css';
import Navbar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';

//Assets
// import FrontCD1 from '../../assets/Cds/DVD_02.png';
// import FrontCD2 from '../../assets/Cds/DVD_05.png';
// import FrontCD3 from '../../assets/Cds/DVD_13.png';
// import FrontCD4 from '../../assets/Cds/DVD_09.png';
import { useState, useEffect } from 'react';

type CD = {
    id : string,
    title: string,
    composer: string,
    frontImage: string,
    backImage: string,
    subtitle: string,
    pieces: string,
}

const Music = () => {
    const [CDs, setCDs] = useState <CD[]> ([]);
    useEffect(() => {
        getCDs();
    }, []);

    const getCDs = async () => {
        const response = await fetch('http://localhost:8081/v1/api/cds');
        const { data } = await response.json();
        setCDs(data);
    };

    return (
        <div>
            <Navbar/>
            <div className={styles['header-container']}>
                <Header content='—Cds'></Header>
            </div>
            <div className={styles['sections-container']}>
                {CDs.map(cd => {
                    return (
                        <section key={cd.id} className={styles['section-cd']}>
                            <div className={styles['CD-img-container']}>
                                <img src={cd.frontImage} alt="CD 1" />
                            </div>
                            <div className={styles['CD-img-container']}>
                                <img src={cd.backImage} alt="CD 1" />
                            </div>
                            <div className={styles['content-container']}>
                                <div className={styles['h3-container']}>
                                    <h3>{cd.title}</h3>
                                </div>
                                <p className={styles['author']}>{cd.composer}</p>
                                <h4>{cd.subtitle}</h4>
                                <div className={styles['ol-container']}>
                                    <ol>
                                        <li>{cd.pieces}</li>
                                    </ol>
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>
            <Footer/>
        </div>
    );
};

export default Music;
