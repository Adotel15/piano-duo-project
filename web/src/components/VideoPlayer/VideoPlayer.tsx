import { useRef } from 'react';
import ReactPlayer from 'react-player/youtube';

import styles from './VideoPlayer.module.css';

import { VideoPlayerType } from '../../types';

type VideoPlayerProps ={
    data: VideoPlayerType
    isActive?: boolean
    onPlay?: () => void
}

const VideoPlayer = ({ data, isActive, onPlay }:VideoPlayerProps) => {
    const { id, title, link } =  data;

    const playerRef = useRef<ReactPlayer>(null);

    return(
        <main key={id} className={styles['video-title-container']}>
            <div className={styles['video-container']}>
                <ReactPlayer
                    ref={playerRef}
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
