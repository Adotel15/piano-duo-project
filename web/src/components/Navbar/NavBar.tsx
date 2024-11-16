import Menu from '../Menu/Menu';
import styles from './Navbar.module.css';

import turnOffMusic from '../../assets/Navbar/logoMusic.png';
import logo from '../../assets/Navbar/Names.png';

const Navbar = () => {
    return (
        <nav className={styles['nav-container']}>
            <div className={styles['nav-logo-container']}>
                <img src={logo} className={styles['nav-logo']} alt="project logo" />
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
