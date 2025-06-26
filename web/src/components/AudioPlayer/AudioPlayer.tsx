import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

import { useAppContext } from '../../context/AppContext';

import PauseImage from '../../assets/Media/gridicons_pause.png';
import StartImage from '../../assets/Media/gridicons_play.svg';

import styles from './AudioPlayer.module.css';

import { AudioPlayerType } from '../../types';

type AudioPlayerProps = {
    data: AudioPlayerType,
    isPlaying: number | null,
    togglePausePlay: (id: number) => void,
}

const AudioPlayer = ({ data, isPlaying, togglePausePlay }: AudioPlayerProps) => {
    const { id, name, author, link, orderNumber } = data;

    const { isMobile } = useAppContext();

    const [currentTime, setCurrentTime] = useState<number>(0);
    const [audioDuration, setAudioDuration] = useState<number>(0);
    const [hovered, setHovered] = useState(false);

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

    const playerWidth = isMobile ? '1px' : '0';
    const playerHeight = isMobile ? '1px' : '0';

    return (
        <div key={id} className={styles['audio-content-container']}>
            <section
                className={`${styles['audio-section-container']} ${isPlaying === id ? styles['active'] : ''}`}
                onClick={handlePlayPause}
            >
                <div className={`${styles['audio-section-line-container']} ${isPlaying === id ? styles['active'] : ''}`} onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>
                    <div className={styles['audio-right-section-container']}>
                        {/** DESKTOP BUTTON */}

                        <div
                            onClick={handlePlayPause}
                            className={styles['audio-toggle-pause-button']}
                        >
                            {hovered ?
                                isPlaying === id ?
                                    <img src={PauseImage} className={styles['audio-pause-button']} alt="Pause" />
                                    :
                                    <img src={StartImage} className={styles['audio-pause-button']} alt="Start" />

                                :
                                <div className={styles['audios-orderNumber']}>{orderNumber}</div>
                            }
                        </div>
                        <div className={styles['audio-name-author-container']}>
                            <p>{name}</p>
                            <p className={styles['audio-author']}>{author}</p>
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
                                    className={`${styles['audio-slider']} ${isPlaying === id ? styles['active'] : ''}`}
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
                        width={playerWidth}
                        height={playerHeight}
                        playsinline={isPlaying === id}
                        style={isMobile ? { position: 'relative', left: '-99999px'} : undefined}
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
