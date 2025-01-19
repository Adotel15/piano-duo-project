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
    const [error, setError] = useState<string | null>(null); // Para manejar errores (opcional)
    const getPhotos = async () => {
        try{
            const response = await fetch('http://35.204.174.205/api/gallery');
            if(!response.ok) {
                throw new Error(`Error:${response.status} ${response.statusText}`);
            }
            const { data } = await response.json();
            setPhotos(data);
        } catch (err) {
            // Manejo del error
            if (err instanceof Error) {
                setError(err.message); // Guardar el mensaje de error (opcional)
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
