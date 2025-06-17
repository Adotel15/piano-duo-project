import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import React from 'react';
import Navbar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import Footer from '../../components/footer/Footer';

import styles from './Cds.module.css';

import FadeIn from 'react-fade-in';

//Assets
import toggleImage from '../../assets/Cds/material-symbols_flip-camera-android-rounded.png';

import fetchData from '../../utils/api';
import i18n from '../../../i18n';

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
    orderNumber: string;
}

const Music = () => {
    const [CDs, setCDs] = useState <CD[] | null> ([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [visibleStates, setVisibleStates] = useState<{ [id: string]: boolean }>({});

    const { t } = useTranslation();

    useEffect(() => {
        if(!CDs) return;
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
            const data = await fetchData<CD[]>('cds', i18n.language);
            // Ordenar por orderNumber de forma ascendente
            if (data) {
                const sortedData = data.sort((a, b) => {
                    return Number(a.orderNumber) - Number(b.orderNumber);
                });
                setCDs(sortedData);
            } else {
                setCDs([]);
            }

            setLoading(false);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Error fetching CDs:' , error);
        }
    };

    const formatPieceName = (section: string) => {
        const italicTerms = ['Nit d’amor', 'Llàgrimes', 'Pàsqua russa', 'Barcarola', 'Nova-York 1991'];
        const regex = /"(.*?)"/g;
        const parts = section.split(regex); // divide por comillas

        return parts.map((part, index) => {
            if (index % 2 === 1) {
                // Dentro de comillas
                if (italicTerms.includes(part.trim())) {
                    return <em key={index}>{part}</em>; // sin comillas
                } else {
                    return  <React.Fragment key={index}>{part}</React.Fragment>;;
                }
            }
            return  <React.Fragment key={index}>{part}</React.Fragment>;;
        });
    };

    return (
        <main className={styles['page-container']}>
            <Navbar/>
            <div className={styles['header-container']}>
                <Header content={t('cds.title')}></Header>
            </div>
            <div className={styles['sections-container']}>
                {loading && <Loader />}
                {/** This should not happen */}
                {!loading && (CDs?.length === 0 || !CDs) && <p>Language not translated</p>}
                {CDs && CDs.map(cd => {
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
                                    <h3 className={styles['h3']}>{cd.title}</h3>
                                </div>
                                <p className={styles['author']}>{cd.composer}</p>
                                <h4>{cd.subtitle}</h4>
                                <div className={styles['ol-container']}>
                                    <ol>

                                        <FadeIn delay={100}>
                                            { cd.orderNumber === '4' ?
                                                cd.pieces && cd.pieces.map(piece =>
                                                    <ul className= {`${
                                                        piece.status ? `pieces-list ${styles['piece-status-incative']}` : ''
                                                    }`} key={piece.id}> {formatPieceName(piece.name)}
                                                        <ol className={styles['piece-sections-container']}>
                                                            {piece.sections?.map((section, index) =>
                                                                <li key={`${piece.id}-section-${index}`}
                                                                    className={styles['piece-sections-container']}>
                                                                    {section}
                                                                </li>
                                                            )}
                                                        </ol>
                                                    </ul>
                                                )
                                                :
                                                cd.pieces && cd.pieces.map(piece =>
                                                    <li className= {`${
                                                        piece.status ? `pieces-list ${styles['piece-status-incative']}` : ''
                                                    }`} key={piece.id}> {formatPieceName(piece.name)}
                                                        <ol className={styles['piece-sections-container']}>
                                                            {piece.sections?.map((section, index) =>
                                                                <li key={`${piece.id}-section-${index}`}
                                                                    className={styles['piece-sections-container']}>
                                                                    {section}
                                                                </li>
                                                            )}
                                                        </ol>
                                                    </li>
                                                )}
                                        </FadeIn>
                                    </ol>
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>
            <Footer/>
        </main>
    );
};

export default Music;
