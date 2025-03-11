import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

import PauseImage from '../../assets/Media/gridicons_pause.png';
import StartImage from '../../assets/Media/gridicons_play.svg';

import styles from './AudioPlayer.module.css';

import { AudioPlayerType } from '../../types';

type AudioPlayerProps = {
    data: AudioPlayerType,
    hover: number,
    setHover: (id: number) => void,
    isPlaying: number | null,
    togglePausePlay: (id: number) => void,
}

const AudioPlayer = ({ data, hover, setHover, isPlaying, togglePausePlay }: AudioPlayerProps) => {
    const { id, number, name, author, link } = data;

    const [currentTime, setCurrentTime] = useState<number>(0);
    const [audioDuration, setAudioDuration] = useState<number>(0);

    const playerRef = useRef<ReactPlayer>(null);
    const sliderRef = useRef<HTMLInputElement>(null);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleReady = () => {
        if (playerRef.current) {
            const duration = playerRef.current.getDuration();
            setAudioDuration(duration);
        }
    };

    const handleProgress = (progress: { playedSeconds: number }) => {
        setCurrentTime(progress.playedSeconds);
        if (sliderRef.current && audioDuration > 0) {
            const progressPercent = (progress.playedSeconds / audioDuration) * 100;
            sliderRef.current.style.setProperty('--seek-before-width', `${progressPercent}%`);
        }
    };

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (playerRef.current && audioDuration > 0) {
            const newTime = Number(e.target.value);
            playerRef.current.seekTo(newTime);
            setCurrentTime(newTime);
            const progressPercent = (newTime / audioDuration) * 100;
            e.target.style.setProperty('--seek-before-width', `${progressPercent}%`);
        }
    };

    const handlePlayPause = () => {
        togglePausePlay(isPlaying === id ? -1 : id);
    };

    return (
        <div key={id} className={styles['audio-content-container']}>
            <section className={styles['audio-section-container']}>
                <div className={styles['audio-section-line-container']}>
                    <div className={styles['audio-right-section-container']}>
                        {/** DESKTOP BUTTON */}
                        <div
                            onMouseEnter={() => setHover(id)}
                            onMouseLeave={() => setHover(-1)}
                            onClick={handlePlayPause}
                            className={styles['audio-toggle-pause-button']}
                        >
                            {isPlaying === id ?
                                <div>
                                    <img src={PauseImage} className={styles['audio-pause-button']} alt="start" />
                                </div>
                                :
                                hover === id ?
                                    <div className={styles['audio-pause-button-container']}>
                                        <img src={StartImage} className={styles['audio-pause-button']} alt="Pause" />
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
                        {/** MOBILE BUTTON */}
                        <div
                            onClick={handlePlayPause}
                            className={styles['audio-toggle-pause-button-mobile']}
                        >
                            {isPlaying === id ?
                                <div>
                                    <img src={PauseImage} className={styles['audio-pause-button']} alt="start" />
                                </div>
                                :
                                <div className={styles['audio-pause-button-container']}>
                                    <img src={StartImage} className={styles['audio-pause-button']} alt="Pause" />
                                </div>

                            }
                        </div>
                        <div className={styles['audio-slider-section']}>
                            <div className={styles['audio-slider-container']}>
                                <input
                                    ref={sliderRef}
                                    type="range"
                                    className={styles['audio-slider']}
                                    min={0}
                                    max={audioDuration}
                                    value={currentTime}
                                    onChange={handleSliderChange}
                                />
                            </div>
                            <div className={styles['audio-timer-duration-container']}>
                                <p>{formatTime(currentTime)}</p>
                                <p>{formatTime(audioDuration)}</p>
                            </div>
                        </div>
                    </div>
                    <ReactPlayer
                        ref={playerRef}
                        url={link}
                        playing={isPlaying === id}
                        loop={false}
                        volume={1}
                        muted={false}
                        controls={false}
                        width="0"
                        height="0"
                        onReady={handleReady}
                        onProgress={handleProgress}
                        progressInterval={1000}
                    />
                </div>
            </section>
        </div>
    );
};

export default AudioPlayer;
