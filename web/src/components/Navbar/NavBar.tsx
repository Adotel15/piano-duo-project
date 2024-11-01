import Menu from '../Menu/Menu';
import styles from './Navbar.module.css';

import turnOffMusic from '../../assets/Navbar/logoMusic.png';
import logo from '../../assets/Navbar/Names.png';

const Navbar = () => {
    return (
        <nav className={styles['nav-container']}>
            <div className={styles['nav-logo-container']}>
                <img src={logo} className={styles['nav-logo ']} alt="project logo" />
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

/**
 *
 * Et deixo l'antiga versió que havies fet perque comparis, quan vagis a fer la PR elimina todo el bloque aquest!
 *
 */

// const Navbar = () => {
//     return (
//         <>
//             <div className={styles['navbar-container']}>
//                 <div className={styles['namesImage-container']}>
//                     <img src={NamesImage} className={styles['namesImage']} alt="names" />
//                 </div>
//                 {/* <section className={styles['navbarRight-container']}> */}
//                 <div className={styles['musicOnOff-container']}>
//                     <img src={musicOnOff} alt="Music_ON/OFF" />
//                 </div>
//                 {/* <div className={styles['menu-container']}> */}
//                 {/* </div>
//             </section> */}
//             </div>
//             <Menu />
//         </>
//     );
// };
export default Navbar;
