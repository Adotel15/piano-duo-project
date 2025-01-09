import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/NavBar';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header';
import styles from './Gallery.module.css';

type Photo = {
    id: string,
    image: string | null,
}

const Gallery = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);

    const getPhotos = async () => {
        const response = await fetch('http://localhost:8081/v1/api/photos');
        const { data } = await response.json();
        setPhotos(data);
    };

    useEffect(() => {
        getPhotos();
    }, []);

    return (
        <div>
            <Navbar/>
            <div className={styles['gallery-page-container']}>
                <div className={styles['gallery-header-container']}>
                    <Header content='—Galería'></Header>
                </div>
                <div className={styles['gallery-container']}>
                    {photos.map(photo =>
                        photo.image ?
                            <div key={photo.id} className={styles['photos-container']}>
                                <img className={styles['gallery-photo']} src={photo.image} alt="" />
                            </div>
                            : null
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Gallery;
