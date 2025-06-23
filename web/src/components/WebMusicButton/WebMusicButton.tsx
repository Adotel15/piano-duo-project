import { useAppContext } from '../../context/AppContext';

import styles from './WebMusicButton.module.css';

import MusicLogo from '../../assets/Navbar/music-button.png';

const WebMusicButton = ({ isTransparent = false }:{ isTransparent?: boolean }) => {
    const { isMusicPlaying, setIsMusicPlaying } = useAppContext();

    return (
        <div className={styles['music-button-container']}>
            {
                isMusicPlaying ?
                    <div onClick={() => setIsMusicPlaying(false)}>
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <style>
                                {`
                                    @keyframes spinner {
                                        0%, 66.66% {
                                            animation-timing-function: cubic-bezier(0.14, .73, .34, 1);
                                            y: 6px;
                                            height: 12px;
                                        }
                                        33.33% {
                                            animation-timing-function: cubic-bezier(0.65, .26, .82, .45);
                                            y: 1px;
                                            height: 22px;
                                        }
                                    }
                                    .bar {
                                        animation: spinner 0.9s linear infinite;
                                        fill: var(--text_content_color);
                                        transition: fill 0.3s ease-in-out;
                                    }
                                    svg:hover .bar {
                                        fill: var(--text_content_color);
                                    }
                                    .bar:nth-child(2), .bar:nth-child(4) {
                                        animation-delay: -0.7s;
                                    }
                                    .bar:nth-child(1), .bar:nth-child(5) {
                                        animation-delay: -0.5s;
                                    }
                        `}
                            </style>
                            <rect className="bar" x="1" y="6" width="2.8" height="12" />
                            <rect className="bar" x="5.8" y="6" width="2.8" height="12" />
                            <rect className="bar" x="10.6" y="6" width="2.8" height="12" />
                            <rect className="bar" x="15.4" y="6" width="2.8" height="12" />
                            <rect className="bar" x="20.2" y="6" width="2.8" height="12" />
                        </svg>
                    </div>
                    :
                    <img
                        src={MusicLogo}
                        className={isTransparent ? styles['music-logo'] : ''}
                        alt="music-logo"
                        onClick={() => setIsMusicPlaying(true)}
                    />
            }
        </div>
    );
};

export default WebMusicButton;
