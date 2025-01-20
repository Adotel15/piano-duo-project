import Navbar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import styles from'./Media.module.css';
import { useState } from 'react';

const Media = () => {
    const [page, setPage] = useState<'audio' | 'video'>('audio');
    const [activeButton, setActiveButton] = useState<'audio' | 'video'>('audio');

    const onChangePage = (page: 'audio' | 'video') => {
        setActiveButton(page);
        setPage(page);
    };

    return(
        <div className={styles['media-page-container']}>
            <Navbar/>
            <div className={styles['media-page-content-container']}>
                <Header content="—Media"></Header>
                <div className={styles['media-content-container']}>
                    <div className={styles['media-buttons-container']}>
                        <button className={`${styles['media-button']} ${
                            activeButton === 'audio' ? styles['active'] : ''
                        }`} onClick={() => onChangePage('audio')}>Audio</button>
                        <button className={`${styles['media-button']} ${
                            activeButton === 'video' ? styles['active'] : ''
                        }`} onClick={() => onChangePage('video')}>Video</button>
                    </div>
                    {page === 'audio' &&
                    <main>
                    Audios
                        <div>
                            <section></section>
                        </div>
                    </main>
                    }
                    {page === 'video' &&
                    <main>
                        Videos
                        <div>
                            <section></section>
                        </div>
                    </main>
                    }
                </div>
            </div>
        </div>
    );
};

export default Media;
