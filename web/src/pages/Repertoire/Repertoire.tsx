import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import FadeIn from 'react-fade-in';

import Navbar from '../../components/Navbar/NavBar';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import Background from '../../components/Background/Background';

import styles from './Repertoire.module.css';

import fetchData from '../../utils/api';
import i18n from '../../../i18n';

type Repertoire = {
    id : string,
    title : string,
    imageRepertoire : string,
    orderNumber : string,
    piece_author :{
        title: string,
        author: string,
    }[]
}

const Repertoire = () => {
    const [repertoires, setRepertoires] = useState <Repertoire[] | null> ([]);
    const [selectedId, setSelectedId] = useState('1');
    const [loading, setLoading] = useState<boolean>(true);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageKey, setImageKey] = useState(0);

    const { t } = useTranslation();

    useEffect(() => {
        getRepertoires();
    }, []);

    useEffect(() => {
        setImageKey(prev => prev + 1);
        setImageLoaded(false);
    }, [selectedId]);

    const getRepertoires = async () => {
        try {
            const data = await fetchData<Repertoire[]>('repertoires', i18n.language);

            if (!data) return;

            if (data) {
                const sortedData = data.sort((a, b) => {
                    return Number(a.orderNumber) - Number(b.orderNumber);
                });
                setRepertoires(sortedData);
            }

            const defaultRepertoire = data.find((rep: Repertoire) => rep.id === '1');
            if (defaultRepertoire) {
                setSelectedId(defaultRepertoire.id);
            } else if (data.length > 0) {
                setSelectedId(data[0].id);
            }
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log('Error fetching repertoires', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className={styles['repertoire-page-container']}>
                <Navbar/>
                <div className={styles['header-repertoire-container']}>
                    <Header content={t('repertoire.title')}></Header>
                </div>
                {/** DESKTOP */}
                <div className={styles['repertoire-content-container']}>
                    {loading && <Loader />}
                    {!loading &&
                    <>
                        <div className={styles['left-repertoire-container']}>
                            <div className={styles['repertoire-menu-container']}>
                                {/** This should not happen */}
                                {!loading && (repertoires?.length === 0 || !repertoires) && <p>Language not translated</p>}
                                {repertoires && repertoires.map(repertoire => {
                                    return (
                                        <div
                                            key={repertoire.id}
                                            onClick={() => setSelectedId(repertoire.id)}
                                        >
                                            <p
                                                className={`${styles['repertoire-menu']} 
                                                    ${selectedId === repertoire.id ? styles['repertoire-menu-active'] : ''}`
                                                }
                                            >
                                                {repertoire.title}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className={styles['image-repertorie-conatiner']}>
                                <img
                                    key={`desktop-${imageKey}`}
                                    src={repertoires?.find(r => r.id === selectedId)?.imageRepertoire}
                                    className={`${styles['image-repertorie']} ${imageLoaded ? styles['image-loaded'] : ''}`}
                                    alt="Repertoire"
                                    onLoad={() => setImageLoaded(true)}
                                />
                            </div>
                        </div>
                        <div className={styles['right-repertorie-conatiner']}>
                            {/** This should not happen */}
                            {!loading && (repertoires?.length === 0 || !repertoires) && <p>Language not translated</p>}
                            {
                                selectedId &&
                                repertoires &&
                                repertoires.filter(repertoire => repertoire.id === selectedId).map(repertoire => {
                                    return (
                                        <div key={repertoire.id} className={styles['repertories-conatiner']}>
                                            <div className={styles['repertorie-title-conatiner']}>
                                                <div>{repertoire.title}</div>
                                            </div>
                                            <FadeIn
                                                delay={10}
                                                className= {styles['piece-author-content-container']}
                                            >
                                                {repertoire.piece_author.map((piece_author, index) => {
                                                    return (
                                                        <div
                                                            key={index}
                                                            className={styles['piece-author-conatiner']}
                                                        >
                                                            <p>{piece_author.title}</p>
                                                            <p className={styles['line-repertoire']}></p>
                                                            <p className={styles['author']}>{piece_author.author}</p>
                                                        </div>
                                                    );
                                                })}
                                            </FadeIn>
                                        </div>
                                    );
                                })}
                        </div>
                        <div className={styles['image-repertorie-conatiner-mobile']}>
                            <img className={`${styles['image-repertorie-mobile']} ${imageLoaded ? styles['image-loaded'] : ''}`}
                                key={`tablet-${imageKey}`}
                                src={repertoires?.find(r => r.id === selectedId)?.imageRepertoire}
                                alt="Repertoire"
                                onLoad={() => setImageLoaded(true)}
                                loading="lazy" />
                        </div>
                    </>
                    }
                </div>
                {/** MOBILE */}
                <section className={styles['repertoire-content-container-mobile']}>
                    {loading && <Loader />}
                    {!loading &&
                    <>
                        <div className={styles['repertoire-list-container-mobile']}>
                            {!loading && (repertoires?.length === 0 || !repertoires) && <p>Language not translated</p>}
                            {
                                repertoires && repertoires.map(repertoire =>
                                    <section
                                        key={repertoire.id}
                                        className={styles['repertoire-list-element-mobile']}
                                    >
                                        <div onClick={() => setSelectedId(repertoire.id)}>
                                            <p
                                                className={`${styles['repertoire-menu']} 
                                                    ${selectedId === repertoire.id ? styles['repertoire-menu-active'] : ''}`
                                                }
                                            >
                                                {repertoire.title}
                                            </p>
                                        </div>
                                        {
                                            selectedId === repertoire.id &&
                                            <div className={styles['piece-author-content-container']}>
                                                {
                                                    repertoire.piece_author.map((piece_author, index) =>
                                                        <div key={index} className={styles['piece-author-conatiner']}>
                                                            <p>{piece_author.title}</p>
                                                            <p className={styles['line-repertoire']}></p>
                                                            <p className={styles['author']}>{piece_author.author}</p>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        }
                                    </section>
                                )
                            }
                        </div>
                    </>
                    }
                    {/* <div className={styles['image-repertorie-conatiner']}>
                        <img className={`${styles['image-repertorie']} ${imageLoaded ? styles['image-loaded'] : ''}`}
                            key={`mobile-section-${imageKey}`}
                            src={repertoires?.find(r => r.id === selectedId)?.imageRepertoire}
                            alt="Repertoire"
                            onLoad={() => setImageLoaded(true)}
                            loading="lazy" />
                    </div> */}
                </section>
                <Footer/>
            </div>
            <Background />
        </>
    );
};

export default Repertoire;

