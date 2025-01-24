import { useState, useEffect } from 'react';

import Navbar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';

import styles from './Music.module.css';
//Assets
import toggleImage from '../../assets/Cds/material-symbols_flip-camera-android-rounded.png';

type CD = {
    id : string,
    title: string,
    composer: string,
    frontImage: string,
    backImage: string,
    subtitle: string,
    pieces: Array<{
        id: string;
        name: string;
        sections: string[];
        status: string,
    }> | null;
}

const Music = () => {
    const [CDs, setCDs] = useState <CD[]> ([]);
    const [visibleStates, setVisibleStates] = useState<{ [id: string]: boolean }>(
        {}
    );

    useEffect(() => {
        const initialState = CDs.reduce(
            (acc: { [id: string]: boolean }, cd: CD) => {
                acc[cd.id] = true;
                return acc;
            },
            {}
        );
        setVisibleStates(initialState);
    }, [CDs]);

    const handleToggle = (id: string) => {
        setVisibleStates(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    useEffect(() => {
        getCDs();
    }, []);

    const getCDs = async () => {
        try{
            const response = await fetch('http://localhost:8081/v1/api/cds');
            const { data } = await response.json();
            // Antes del setCDS ordenar el data, spoiler .sort()
            setCDs(data);
        } catch (error) {
            console.error('Error fetching CDs:' , error);
        }
    };

    return (
        <div>
            <Navbar/>
            <div className={styles['header-container']}>
                <Header content='—Cds'></Header>
            </div>
            <div className={styles['sections-container']}>
                {CDs.map(cd => {
                    const isFrontVisible = visibleStates[cd.id];
                    return (
                        <section key={cd.id} className={styles['section-cd']}>
                            <div className= {styles['images-container']}>
                                {cd.frontImage ?
                                    <>
                                        <div className={styles['toggle-image-container']} onClick={() => handleToggle(cd.id)} >
                                            <img className={styles['toggle-image']} src={toggleImage} />
                                        </div>
                                        <div className={`${styles['CD-front-image-container']} ${
                                            isFrontVisible ? styles['show'] : styles['hide']
                                        }`}>
                                            <img className={styles['CD-image']} src={cd.frontImage} alt="CD 1" />
                                        </div>
                                        <div className={`${styles['CD-back-image-container']} ${
                                            isFrontVisible ? styles['hide'] : styles['show']
                                        }`}>
                                            <img className={styles['CD-image']} src={cd.backImage} alt="CD 1" />
                                        </div>
                                    </>
                                    :
                                    <div className={styles['CD-back-image-container-only']}>
                                        <img className={styles['CD-image']} src={cd.backImage} alt="CD 1" />
                                    </div>
                                }
                            </div>

                            <div className={styles['content-container']}>
                                <div className={styles['h3-container']}>
                                    <h3>{cd.title}</h3>
                                </div>
                                <p className={styles['author']}>{cd.composer}</p>
                                <h4>{cd.subtitle}</h4>
                                <div className={styles['ol-container']}>
                                    <ol>
                                        {cd.pieces && cd.pieces.map(piece =>
                                            <li className= {`${
                                                piece.status ? `pieces-list ${styles['piece-status-incative']}` : ''
                                            }`} key={piece.id}>{piece.name}
                                                <ol>{piece.sections}</ol>
                                            </li>
                                        )}
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
