import { useState,useEffect, /*useRef*/ } from 'react';
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

import Navbar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import styles from'./Media.module.css';
import Loader from '../../components/Loader/Loader';
import Footer from '../../components/footer/Footer';

import AudioImage from '../../assets/Media/Concerts_022 2.png';

import { AudioPlayerType, VideoPlayerType } from '../../types';

const Media = () => {
    const [page, setPage] = useState<'audio' | 'video'>('audio');
    const [activeButton, setActiveButton] = useState<'audio' | 'video'>('audio');
    const [loading, setLoading] = useState<boolean>(true);
    const [currentPlayingId, setCurrentPlayingId] = useState<number | null>(null);

    const [audio, setAudio] = useState <AudioPlayerType[]> ([]);
    const [video, setVideo] = useState <VideoPlayerType[]> ([]);
    const onChangePage = (page: 'audio' | 'video') => {
        setActiveButton(page);
        setPage(page);
    };

    const [isPlaying, setIsPlaying] = useState<number>(-1);
    const [hover, setHover] = useState<number>(-1);
    const togglePausePlay = (id: number) => {
        console.log(id);
        setIsPlaying(prevState => prevState === id ? -1 : id);
    };

    const getData = async () => {
        try {
            setLoading(true);
            const [audiosResponse, videosResponse] = await Promise.all([
                fetch('http://localhost:8081/v1/api/audios'),
                fetch('http://localhost:8081/v1/api/videos')
            ]);
            if (!audiosResponse.ok || !videosResponse.ok) {
                const errorMessage = `HTTP error! Audios: ${audiosResponse.status}, Videos: ${videosResponse.status}`;
                throw new Error(errorMessage);
            }
            const [audiosData, videosData] = await Promise.all([
                audiosResponse.json(),
                videosResponse.json()
            ]);
            setAudio(audiosData.data);
            setVideo(videosData.data);
        } catch (error) {
            console.error('Error fetching media:', error);
            if (error instanceof Error) {
                if (error.message.includes('Audios')) {
                    console.error('Error específico en audios');
                } else if (error.message.includes('Videos')) {
                    console.error('Error específico en videos');
                }
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
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
                    <main className={styles['videos-page-container']}>
                        {!loading && video.map(videos =>{
                            return(
                                <VideoPlayer
                                    data={videos}
                                    key={videos.id}
                                    isActive={currentPlayingId === videos.id}
                                    onPlay={() => setCurrentPlayingId(videos.id)}
                                />
                            );
                        })}
                    </main>
                    }
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Media;
