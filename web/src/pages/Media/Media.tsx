import { useState,useEffect, useRef } from 'react';
// import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';

import Navbar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import styles from'./Media.module.css';
import Loader from '../../components/Loader/Loader';
import Footer from '../../components/footer/Footer';

import AudioImage from '../../assets/Media/Concerts_022 2.png';
import PauseImage from '../../assets/Media/gridicons_pause.png';
import StartImage from '../../assets/SocialMedia/instagram.png';
import DownloadImage from '../../assets/Media/material-symbols-light_download.png';
import ShareImage from '../../assets/Media/material-symbols-light_share-outline.png';

type Audio =
{
    id: string,
    number: string,
    name: string,
    author: string,
    duration: string,
    audio: string,
};

const Media = () => {
    const [page, setPage] = useState<'audio' | 'video'>('audio');
    const [activeButton, setActiveButton] = useState<'audio' | 'video'>('audio');
    const [loading, setLoading] = useState<boolean>(true);

    const [audio, setAudio] = useState <Audio[]> ([]);
    const onChangePage = (page: 'audio' | 'video') => {
        setActiveButton(page);
        setPage(page);
    };

    const [isPlaying, setIsPlaying] = useState<string>('');
    const audioPlayer = useRef();
    const togglePausePlay = (id: string) => {
        setIsPlaying(prevState => prevState === id ? '' : id);

        if (isPlaying) {
            audioPlayer.current.play();
        } else {
            audioPlayer.current.pause();
        }
    };

    const [hover, setHover] = useState<string>('');

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
            const response = await fetch('http://localhost:8081/v1/api/audios');
            const { data } = await response.json();
            setAudio(data);
            setLoading(false);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Error fetching reviews', error);
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
                                    <div key={audios.id} className={styles['audio-content-container']}>
                                        <section className={styles['audio-section-container']}>
                                            <div className={styles['audio-section-line-container']}>
                                                <div className={styles['audio-right-section-container']}>
                                                    <div
                                                        onMouseEnter={() => setHover(audios.id)}
                                                        onMouseLeave={() => setHover('')}
                                                        onClick={() => togglePausePlay(audios.id)}
                                                        className={styles['audio-toggle-pause-button']}
                                                    >
                                                        {isPlaying === audios.id ?
                                                            <div>
                                                                <img src={StartImage} className={styles['audio-pause-button']} alt="start" />
                                                            </div>
                                                            :
                                                            hover === audios.id ?
                                                                <div className={styles['audio-pause-button-container']}>
                                                                    <img src={PauseImage} className={styles['audio-pause-button']} alt="Pause" />
                                                                </div>
                                                                :
                                                                <p className={styles['audio-number']}>{audios.number}</p>
                                                        }
                                                    </div>

                                                    <div className={styles['audio-name-author-container']}>
                                                        <p>{audios.name}</p>
                                                        <p>{audios.author}</p>
                                                    </div>
                                                </div>
                                                <div className={styles['audio-slider-timer-container']}>
                                                    <div className={styles['audio-slider-container']}>
                                                        <input
                                                            type="range"
                                                            className={styles['audio-slider']}
                                                            min="0"
                                                            max="100"
                                                        />
                                                    </div>
                                                    <div className={styles['audio-timer-duration-container']}>
                                                        <p>00:00</p>
                                                        <p>{audios.duration}</p>
                                                    </div>
                                                </div>
                                                <audio
                                                    src={audios.audio}
                                                />
                                            </div>
                                            <div className={styles['audio-share-download-button-container']}>
                                                <div className={styles['audio-share-download-button-container']}>
                                                    <img src={ShareImage}  className={styles['audio-share-download-button']} alt="" />
                                                </div>
                                                <div className={styles['audio-share-download-button-container']}>
                                                    <img src={DownloadImage}  className={styles['audio-share-download-button']} alt="" />
                                                </div>
                                            </div>
                                        </section>
                                    </div>
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
