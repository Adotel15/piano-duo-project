import { Link } from 'react-router-dom';

import Menu from '../Menu/Menu';
import WebMusicButton from '../WebMusicButton/WebMusicButton';

import { useAppContext } from '../../context/AppContext';

import styles from './Navbar.module.css';

import PianoDuoLogo from '../../assets/piano-duo-logo.png';

const Navbar = ({ isTransparent = false }:{ isTransparent?: boolean }) => {
    const { isMenuOpen, setIsMenuOpen } = useAppContext();

    return (
        <nav
            className={styles['nav-container-transparent']}
        >
            <div className={styles['nav-logo-container']}>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                    <img
                        src={PianoDuoLogo}
                        className={styles['nav-logo-transparent']}
                        alt="piano-duo-logo"
                    />
                </Link>
            </div>
            <div className={styles['nav-controls-container']}>
                {!isMenuOpen && <WebMusicButton isTransparent={isTransparent}/>}
                <Menu isTransparent={isTransparent}/>
            </div>
        </nav>
    );
};

export default Navbar;
