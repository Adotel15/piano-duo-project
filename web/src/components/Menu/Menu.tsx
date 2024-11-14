import { Link } from 'react-router-dom';
import styles from './Menu.module.css';
import { useState } from 'react';
import { menuOptions as defaultMenuOptions } from '../../constants/ui';
import MenuOpen from '../../assets/Menu/healthicons_ui-menu.png';
import MenuClosed from '../../assets/Menu/healthicons_ui-menu (1).png';

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <button className={isMenuOpen ? 'menu-open' : 'menu-closed'} onClick={toggleMenu}>
                <img src={isMenuOpen ? MenuOpen : MenuClosed} alt="Menu Icon"/>
            </button>

            {isMenuOpen &&
                <div className={styles['menu-container']}>
                    <ul className={`${styles['menu-dropdown']} ${isMenuOpen ? styles.show : ''}`}>
                        {defaultMenuOptions.map(option =>
                            <li key={option.id}>
                                <Link to={option.path}>{option.label}</Link>
                            </li>
                        )}
                    </ul>
                </div>
            }
        </>
    );
};

export default Menu;

/*
    Així es com estaba abans, ho he cambiat, si tens dubtes ho veiem
*/

// return (
//     <div className={styles['menu-container']}>
//         <button className={styles['menu-button']} onClick={toggleMenu}>Menu</button>
//         {isMenuOpen &&
//             <ul className={`${styles['menu-dropdown']} ${isMenuOpen ? styles.show : ''}`}>
//                 {defaultMenuOptions.map(option =>
//                     <li key={option.id}>
//                         <Link to={option.path}>{option.label}</Link>
//                     </li>
//                 )}
//             </ul>
//         }
//     </div>
// );
