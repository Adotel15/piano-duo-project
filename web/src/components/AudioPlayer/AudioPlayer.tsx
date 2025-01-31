import { useRef, useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';

import PauseImage from '../../assets/Media/gridicons_pause.png';
import StartImage from '../../assets/SocialMedia/instagram.png';
import DownloadImage from '../../assets/Media/material-symbols-light_download.png';
import ShareImage from '../../assets/Media/material-symbols-light_share-outline.png';

import styles from './AudioPlayer.module.css';

import { AudioPlayerType } from '../../types';

type AudioPlayerProps = {
    data: AudioPlayerType,
    hover: number,
    setHover: (id: number) => void,
    isPlaying: number,
    togglePausePlay: (id: number) => void,
}

const AudioPlayer = ({ data, hover, setHover, isPlaying, togglePausePlay }: AudioPlayerProps) => {
    const { id, number, name, author, audio } = data;

    const [currentTime, setCurrentTime] = useState<number>(0);
    const [audioDuration, setAudioDuration] = useState<number>(0);
    const audioPlayerRef = useRef<ReactAudioPlayer>(null);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        const audioElement = audioPlayerRef.current?.audioEl.current;
        if (!audioElement) return;

        const updateTime = () => setCurrentTime(audioElement.currentTime);
        const updateDuration = () => setAudioDuration(audioElement.duration);

        audioElement.addEventListener('timeupdate', updateTime);
        audioElement.addEventListener('loadedmetadata', updateDuration);

        return () => {
            audioElement.removeEventListener('timeupdate', updateTime);
            audioElement.removeEventListener('loadedmetadata', updateDuration);
        };
    }, []);

    useEffect(() => {
        const audioElement = audioPlayerRef.current?.audioEl.current;
        if (!audioElement) return;

        if (isPlaying === id) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    }, [isPlaying, id]);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const audioElement = audioPlayerRef.current?.audioEl.current;
        if (!audioElement) return;

        const newTime = Number(e.target.value);
        audioElement.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const handlePlayPause = () => {
        togglePausePlay(isPlaying === id ? -1 : id);
    };

    return (
        <div key={id} className={styles['audio-content-container']}>
            <section className={styles['audio-section-container']}>
                <div className={styles['audio-section-line-container']}>
                    <div className={styles['audio-right-section-container']}>
                        <div
                            onMouseEnter={() => setHover(id)}
                            onMouseLeave={() => setHover(-1)}
                            onClick={handlePlayPause}
                            className={styles['audio-toggle-pause-button']}
                        >
                            {isPlaying === id ?
                                <div>
                                    <img src={StartImage} className={styles['audio-pause-button']} alt="start" />
                                </div>
                                :
                                hover === id ?
                                    <div className={styles['audio-pause-button-container']}>
                                        <img src={PauseImage} className={styles['audio-pause-button']} alt="Pause" />
                                    </div>
                                    :
                                    <p className={styles['audio-number']}>{number}</p>
                            }
                        </div>

                        <div className={styles['audio-name-author-container']}>
                            <p>{name}</p>
                            <p>{author}</p>
                        </div>
                    </div>
                    <div className={styles['audio-slider-timer-container']}>
                        <div className={styles['audio-slider-container']}>
                            <input
                                type="range"
                                className={styles['audio-slider']}
                                min={0}
                                max={audioDuration || 1}
                                value={currentTime}
                                onChange={handleSliderChange}
                            />
                        </div>
                        <div className={styles['audio-timer-duration-container']}>
                            <p>{formatTime(currentTime)}</p>
                            <p>{formatTime(audioDuration)}</p>
                        </div>
                    </div>
                    <ReactAudioPlayer
                        ref={audioPlayerRef}
                        src={audio}
                        loop={false}
                        volume={1}
                        muted={false}
                        controls={false}
                        onEnded={() => setCurrentTime(0)}
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
};

export default AudioPlayer;
