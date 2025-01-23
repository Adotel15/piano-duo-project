import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/NavBar';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header';
import styles from './Gallery.module.css';

const Gallery = () => {
    const [photos, setPhotos] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
    const [closing, setClosing] = useState(false);

    const openModal = (photo : string) => {
        setSelectedPhoto(photo);
    };

    const closeModal = () => {
        setClosing(true);
        setTimeout(() => {
            setSelectedPhoto(null);
            setClosing(false); //resetear
        }, 350); //tiene que coincidir con el tiempo de animacion
    };

    const getPhotos = async () => {
        try{
            const response = await fetch('http://localhost:8081/v1/api/gallery');
            if(!response.ok) {
                throw new Error(`Error:${response.status} ${response.statusText}`);
            }

            const { data } = await response.json();
            setPhotos(data.photos);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
                console.error('Error fetching photos:', err.message);
            } else {
                console.error('Unknown error occurred:', err);
            }
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
                <div className={styles['gallery-container']}>
                    {photos.map((photo, index) =>
                        <div key={index} className={styles['photo-container']} onClick={() => openModal(photo)}>
                            <img className={styles['gallery-photo']} src={photo} alt="" />
                        </div>
                    )}
                </div>

                {/* Modal */}
                {selectedPhoto &&
                    <div className={`${styles.modal} ${selectedPhoto ? styles.show : ''} ${closing ? styles.closing : ''}`} onClick={closeModal}>

                        <div className={styles['modal-content']} onClick={e => e.stopPropagation()}>
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
