import { useState, useEffect } from 'react';

import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import Navbar from '../../components/Navbar/NavBar';
import Footer from '../../components/footer/Footer';

import styles from './Gallery.module.css';

const Gallery = () => {
    const [photos, setPhotos] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
    const [closing, setClosing] = useState(false);
    const [loading, setLoading] = useState(true);

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
            const response = await fetch('http://localhost:8081/v1/api/gallery');
            if(!response.ok) {
                throw new Error(`Error:${response.status} ${response.statusText}`);
            }

            const { data } = await response.json();

            setPhotos(data.photos);
            setLoading(false);
        } catch (err) {
            setError(`${err}`);
            setLoading(false);
        }
    };

    useEffect(() => {
        getPhotos();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <Navbar/>
            <div className={styles['gallery-page-container']}>
                <div className={styles['gallery-header-container']}>
                    <Header content='—Galería'></Header>
                </div>
                { loading && <Loader /> }
                {
                    !loading &&
                        <div className={styles['gallery-container']}>
                            {photos.map((photo, index) =>
                                <div key={index} className={styles['photo-container']} onClick={() => openModal(photo)}>
                                    <img className={styles['gallery-photo']} src={photo} alt="" loading="lazy" />
                                </div>
                            )}
                        </div>
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
    );
};

export default Gallery;
