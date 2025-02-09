import { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

import styles from './VideoPlayer.module.css';

import { VideoPlayerType } from '../../types';

type VideoPlayerProps ={
    data : VideoPlayerType
    isActive?: boolean
    onPlay?: () => void
}

const VideoPlayer = ( {data, isActive, onPlay } : VideoPlayerProps) => {
    const { id, title, link } =  data;

    const playerRef = useRef<ReactPlayer>(null);

    useEffect(() => {
        if (playerRef.current) {
            playerRef.current.getInternalPlayer().pause();
        }
    }, [isActive]);

    return(
        <main key={id} className={styles['video-title-container']}>
            <div className={styles['video-container']}>
                <ReactPlayer
                    url={link}
                    width= '100%'
                    playing={isActive}
                    onPlay={onPlay}
                    controls
                />
                {title}
            </div>
        </main>
    );
};

export default VideoPlayer;
