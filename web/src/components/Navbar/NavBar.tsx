import Menu from '../Menu/Menu';
import styles from './Navbar.module.css';
//assets
import musicOnOff from '../../assets/Navbar/logoMusic.png';
import NamesImage from '../../assets/Navbar/Names.png';

const Navbar = () => {
    return (
        <>
            <div className={styles['navbar-container']}>
                <div className={styles['namesImage-container']}>
                    <img src={NamesImage} className={styles['namesImage']} alt="names" />
                </div>
                {/* <section className={styles['navbarRight-container']}> */}
                <div className={styles['musicOnOff-container']}>
                    <img src={musicOnOff} alt="Music_ON/OFF" />
                </div>
                {/* <div className={styles['menu-container']}> */}
                {/* </div>
            </section> */}
            </div>
            <Menu />
        </>
    );
};
export default Navbar;
