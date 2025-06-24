import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import FadeIn from 'react-fade-in';

import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import Navbar from '../../components/Navbar/NavBar';
import Footer from '../../components/footer/Footer';
import Background from '../../components/Background/Background';

import fetchData from '../../utils/api';

import styles from './Gallery.module.css';
import i18n from '../../../i18n';

const Gallery = () => {
    const [photos, setPhotos] = useState<string[] | null>([]);
    const [error, setError] = useState<string | null>(null);
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
    const [closing, setClosing] = useState(false);
    const [loading, setLoading] = useState(true);

    const { t } = useTranslation();

    const openModal = (photo : string) => {
        setSelectedPhoto(photo);
    };

    const closeModal = () => {
        setClosing(true);
        setTimeout(() => {
            setSelectedPhoto(null);
            setClosing(false);
        }, 350);
    };

    const getPhotos = async () => {
        try{
            const data = await fetchData<{ photos: string[] }>('gallery', i18n.language);
            setPhotos(data?.photos ?? []);
        } catch (err) {
            setError(`${err}`);
        }
        setLoading(false);
    };

    useEffect(() => {
        getPhotos();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div>
                <Navbar/>
                <div className={styles['gallery-page-container']}>
                    <div className={styles['gallery-header-container']}>
                        <Header content={t('gallery.title')}></Header>
                    </div>
                    {loading && <Loader /> }
                    {/** This should not happen */}
                    {!loading && (photos?.length === 0 || !photos) && <p>Language not translated</p>}
                    {
                        !loading && photos &&
                    <FadeIn className={styles['gallery-container']}>
                        {photos.map((photo, index) =>
                            <div key={index} className={styles['photo-container']} onClick={() => openModal(photo)}>
                                <img className={styles['gallery-photo']} src={photo} alt="" loading="lazy" />
                            </div>
                        )}
                    </FadeIn>
                    }
                    {/* Modal */}
                    {selectedPhoto &&
                    <div className={`${styles.modal} ${selectedPhoto ? styles.show : ''} ${closing ? styles.closing : ''}`} onClick={closeModal}>
                        <div className={styles['modal-content']}>
                            <img src={selectedPhoto} alt="Selected" className={styles['modal-photo']} />
                        </div>
                    </div>
                    }
                </div>
                <Footer/>
            </div>
            <Background />
        </>
    );
};

export default Gallery;
