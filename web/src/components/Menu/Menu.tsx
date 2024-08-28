import { Link } from 'react-router-dom';
import styles from './Menu.module.css';
import { useState } from 'react';
import { menuOptions as defaultMenuOptions } from '../../constants/ui';

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles['menu-container']}>
            <button className={styles['menu-button']} onClick={toggleMenu}>Menu</button>
            {isMenuOpen &&
                <ul className={`${styles['menu-dropdown']} ${isMenuOpen ? styles.show : ''}`}>
                    {defaultMenuOptions.map(option =>
                        <li key={option.id}>
                            <Link to={option.path}>{option.label}</Link>
                        </li>
                    )}
                </ul>
            }
        </div>
    );
};

export default Menu;
