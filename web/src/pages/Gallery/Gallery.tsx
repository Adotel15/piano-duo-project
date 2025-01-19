import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/NavBar';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header';
import styles from './Gallery.module.css';

const Gallery = () => {
    const [photos, setPhotos] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

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
                        <div key={index} className={styles['photos-container']}>
                            <img className={styles['gallery-photo']} src={photo} alt="" />
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Gallery;
