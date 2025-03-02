import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../../context/AppContext';

import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import Navbar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import Footer from '../../components/footer/Footer';

import styles from'./Media.module.css';

import AudioImage from '../../assets/Media/Concerts_022 2.png';

import { AudioPlayerType, VideoPlayerType } from '../../types';

import i18n from '../../../i18n';
import fetchData from '../../utils/api';

const Media = () => {
    const [page, setPage] = useState<'audio' | 'video'>('audio');
    const [loading, setLoading] = useState<boolean>(true);
    const [isPlaying, setIsPlaying] = useState<number | null>(null);
    const [hover, setHover] = useState<number>(-1);
    const [audio, setAudio] = useState <AudioPlayerType[] | null> ([]);
    const [video, setVideo] = useState <VideoPlayerType[] | null> ([]);

    const { isMusicPlaying, setIsMusicPlaying } = useAppContext();

    const { t } = useTranslation();

    const onChangePage = (page: 'audio' | 'video') => {
        setPage(page);
        setIsPlaying(null);
    };

    const togglePausePlay = (id: number) => {
        if(isMusicPlaying) setIsMusicPlaying(false);
        setIsPlaying(prevState => prevState === id ? -1 : id);
    };

    const getData = async () => {
        try {
            setLoading(true);
            const [audiosResponse, videosResponse] = await Promise.all([
                fetchData<AudioPlayerType[]>('audios', i18n.language),
                fetchData<VideoPlayerType[]>('videos', i18n.language),
            ]);
            setAudio(audiosResponse);
            setVideo(videosResponse);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Error fetching media', error);
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
                <Header content={t('media.title')}></Header>
                <div className={styles['media-content-container']}>
                    {loading && <Loader />}
                    {!loading &&
                    <>
                        <div className={styles['media-buttons-container']}>
                            <button
                                className={`${styles['media-button']} ${ page === 'audio' ? styles['active'] : ''}`}
                                onClick={() => onChangePage('audio')}
                            >
                                Audio
                            </button>
                            <button
                                className={`${styles['media-button']} ${ page === 'video' ? styles['active'] : ''}`}
                                onClick={() => onChangePage('video')}
                            >
                                Video
                            </button>
                        </div>
                        {page === 'audio' &&
                            <main className={styles['audios-page-container']}>
                                <div className={styles['all-audios-container']}>
                                    {!loading && (audio?.length === 0 || !audio) && <p>Language not translated</p>}
                                    {audio && audio.map(audios => {
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
                                {!loading && (video?.length === 0 || !video) && <p>Language not translated</p>}
                                {video && video.map(videos =>{
                                    return(
                                        <VideoPlayer
                                            key={videos.id}
                                            data={videos}
                                            isActive={isPlaying === videos.id}
                                            onPlay={() => {
                                                if(isMusicPlaying) setIsMusicPlaying(false);
                                                setIsPlaying(videos.id);
                                            }}
                                        />
                                    );
                                })}
                            </main>
                        }
                    </>
                    }
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Media;
