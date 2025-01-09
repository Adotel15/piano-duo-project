import Menu from '../Menu/Menu';

import styles from './Navbar.module.css';

import turnOffMusic from '../../assets/Navbar/music-button.png';
import PianoDuoLogo from '../../assets/piano-duo-logo.png';

const Navbar = () => {
    return (
        <nav className={styles['nav-container']}>
            <div
                className={styles['nav-logo-container']}
                onClick={() => window.location.href = '/'}
            >
                <img
                    src={PianoDuoLogo}
                    className={styles['nav-logo']}
                    alt="piano-duo-logo"
                />
            </div>
            <div className={styles['nav-controls-container']}>
                <div className={styles['control-container']}>
                    <img src={turnOffMusic} alt="turn-on-off-music" />
                </div>
                <Menu />
            </div>
        </nav>
    );
};

export default Navbar;
