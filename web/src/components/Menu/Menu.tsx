import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useAppContext } from '../../context/AppContext';

import styles from './Menu.module.css';

import { menuOptions } from '../../constants/ui';
import { routes } from '../../constants/routes';

import MusicLogo from '../../assets/Navbar/music-button.png';

const Menu = () => {
    const location = useLocation();
    const { isMenuOpen, i18n, setIsMenuOpen } = useAppContext();
    const { t } = useTranslation();

    const [pageSelected, setPageSelected] = useState<keyof typeof routes | '/'>('/');
    const languages = ['ca', 'es', 'en'] as const;

    useEffect(() => {
        const currentPath = Object.entries(routes).find(
            ([, path]) => path === location.pathname
        )?.[0] as keyof typeof routes || '/';

        setPageSelected(currentPath);
    }, [location.pathname]);

    return (
        <>
            <button
                className={isMenuOpen ? styles['menu-open'] : styles['menu-closed']}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <div className={styles['hamburger-icon']}>
                    <span className={styles['bar']}></span>
                    <span className={styles['bar']}></span>
                </div>
            </button>
            <div className={`${styles['menu-container']} ${isMenuOpen ? styles['open'] : ''}`}>
                <ul className={`${styles['menu-dropdown']} ${isMenuOpen ? styles['show'] : ''}`}>
                    {menuOptions.map(option =>
                        <Link
                            key={option.id}
                            className={`
                                ${styles['menu-item']} 
                                ${pageSelected === option.path.slice(1) ? styles['page-selected'] : ''}
                            `}
                            to={option.path}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <p className={styles['menu-link']}>{t(`menu.${option.jsonKey}`)}</p>
                            {
                                option.subtitleKey &&
                                    <p className={styles['menu-subtitle']}>{t(`menu.${option.subtitleKey}`)}</p>
                            }
                        </Link>
                    )}
                </ul>
                <div className={`${styles['menu-footer']} ${isMenuOpen ? '' : styles['hide']}`}>
                    <div className={styles['music-control-container']}>
                        <img src={MusicLogo} alt="turn-on-off-music" />
                    </div>
                    <div>
                        {
                            languages.map((lang, index) =>
                                <button
                                    key={lang}
                                    className={`${styles['language'] } ${i18n?.language === lang ? styles['language-selected'] : ''}`}
                                    onClick={() => {
                                        i18n?.changeLanguage(lang);
                                        setIsMenuOpen(false);
                                        window.location.reload();
                                    }}
                                >
                                    {lang}
                                    {
                                        index !== languages.length - 1 &&
                                        <span className={styles['separator']}></span>
                                    }
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>

        </>
    );
};

export default Menu;
