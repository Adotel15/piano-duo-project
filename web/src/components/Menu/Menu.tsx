import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Menu.module.css';

import { menuOptions as defaultMenuOptions } from '../../constants/ui';

import MenuOpen from '../../assets/Menu/menu-open-icon.png';
import MenuClosed from '../../assets/Menu/menu-closed-icon.png';

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <button className={isMenuOpen ? styles['menu-open'] : styles['menu-closed']} onClick={toggleMenu}>
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
