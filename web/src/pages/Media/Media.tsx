import { useState,useEffect, /*useRef*/ } from 'react';
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';

import Navbar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import styles from'./Media.module.css';
import Loader from '../../components/Loader/Loader';
import Footer from '../../components/footer/Footer';

import AudioImage from '../../assets/Media/Concerts_022 2.png';

import { AudioPlayerType } from '../../types';

const Media = () => {
    const [page, setPage] = useState<'audio' | 'video'>('audio');
    const [activeButton, setActiveButton] = useState<'audio' | 'video'>('audio');
    const [loading, setLoading] = useState<boolean>(true);

    const [audio, setAudio] = useState <AudioPlayerType[]> ([]);
    const onChangePage = (page: 'audio' | 'video') => {
        setActiveButton(page);
        setPage(page);
    };

    const [isPlaying, setIsPlaying] = useState<number>(-1);
    const [hover, setHover] = useState<number>(-1);
    // const audioPlayer = useRef();
    const togglePausePlay = (id: number) => {
        console.log(id);
        setIsPlaying(prevState => prevState === id ? -1 : id);
    };

    /*const getData = async () => {
        try {
            const audioData = fetch('http://localhost:8081/v1/api/audios');
            //const videoData = fetch('https://api.example.com/video');

            const [audio] = await Promise.all([audioData]);

            const { data:dataAudio } = audio;
            //const { data:dataVideo } = video;

            setAudio(dataAudio);
            //setVideo(dataVideo);
        }catch(error) {
            console.log(error);
        }
    }; */

    const getAudios = async () => {
        try {
            console.log('inicia fetch');
            const response = await fetch('http://localhost:8081/v1/api/audios');
            console.log('Respuesta recibida:', response.status);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const { data } = await response.json();
            console.log(data);
            setAudio(data);
            setLoading(false);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Error fetching audios', error);
            setLoading(true);
        }
    };

    useEffect(() => {
        getAudios();
    }, []);

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
                    <main className={styles['audios-page-container']}>
                        {loading && <Loader />}
                        <div className={styles['all-audios-container']}>
                            {!loading && audio.map(audios => {
                                return (
                                    <AudioPlayer
                                        key={audios.id}
                                        data={audios}
                                        hover={hover}
                                        setHover={setHover}
                                        isPlaying={isPlaying}
                                        togglePausePlay={togglePausePlay}
                                    />
                                );
                            })}
                        </div>
                        <div className={styles['audio-image-container']}>
                            <img className={styles['audio-image']} src={AudioImage} alt="" />
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
            <Footer/>
        </div>
    );
};

export default Media;
