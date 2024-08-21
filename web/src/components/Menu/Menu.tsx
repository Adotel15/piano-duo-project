import { Link } from 'react-router-dom';
import styles from './Menu.module.css';
import { useState } from 'react';

interface MenuOptions{
    id: number;
    label: string;
    path: string;
}

const Menu = () => {
    const [menuOptions, /*setMenuOptions*/]= useState<MenuOptions[]>([
        {
            id: 0,
            label: 'Inicio',
            path: '/',

        },
        {
            id: 1,
            label: 'Reviews',
            path: '/reviews',

        },
        {
            id: 2,
            label: 'Contacto',
            path: '/contact',

        },
        {
            id: 3,
            label: 'Media',
            path: '/media',

        }
    ]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles['menu-container']}>
            <button className={styles['menu-button']} onClick={toggleMenu}>Menu</button>
            {isMenuOpen &&
                <ul className={`${styles['menu-dropdown']} ${isMenuOpen ? styles.show : ''}`}>
                    {menuOptions.map(option =>
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
