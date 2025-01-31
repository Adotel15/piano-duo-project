import { Link } from 'react-router-dom';

import Menu from '../Menu/Menu';

import { useAppContext } from '../../context/AppContext';

import styles from './Navbar.module.css';

import MusicLogo from '../../assets/Navbar/music-button.png';
import PianoDuoLogo from '../../assets/piano-duo-logo.png';

const Navbar = () => {
    const { isMenuOpen } = useAppContext();

    return (
        <nav className={styles['nav-container']}>
            <div
                className={styles['nav-logo-container']}
            >
                <Link to="/">
                    <img
                        src={PianoDuoLogo}
                        className={styles['nav-logo']}
                        alt="piano-duo-logo"
                    />
                </Link>
            </div>
            <div className={styles['nav-controls-container']}>
                {
                    !isMenuOpen &&
                    <div className={styles['control-container']}>
                        <img src={MusicLogo} alt="turn-on-off-music" />
                    </div>
                }
                <Menu />
            </div>
        </nav>
    );
};

export default Navbar;
