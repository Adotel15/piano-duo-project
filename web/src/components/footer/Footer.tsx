import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './Footer.module.css';

import { menuOptions } from '../../constants/ui';

import Logo from '../../assets/PianoDuoLogo.png';
import Youtube from '../../assets/Socials/youtube_1.png';
import Spotify from '../../assets/Socials/Spotify.png';
// import Linkedin from '../../assets/Socials/Linkedin.png';
// import Facebook from '../../assets/Socials/Facebook_1.png';
// import Instagram from '../../assets/Socials/Instagram.png';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className={styles['component-container']}>
            <div className={styles['footer-container']}>
                <div className={styles['logo-container']}>
                    <img src={Logo} alt="Logo" />
                    <div className={styles['logo-title']}>
                        <p className={styles['logo-title-item']}>PÉREZ MOLINA</p>
                        <p className={styles['logo-title-item']}>piano duo</p>
                    </div>
                </div>
                <div className={styles['menu-socials-container']}>
                    <div className={styles['menu-options-container']}>
                        <ul className={styles['menu-options-list']}>
                            {menuOptions.map(option =>
                                <li   className={`${styles['list-container']} ${styles['menu-list-item']}`} key={option.id}>
                                    <Link to={option.path}>{t(`menu.${option.jsonKey}`)}</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className={styles['socials-list-container']}>
                        <li className={styles['list-container']}><img src={Youtube} alt="" /></li>
                        {/* <li className={styles['list-container']}><img src={Linkedin} alt="" /></li> */}
                        {/* <li className={styles['list-container']}><img src={Instagram} alt="" /></li> */}
                        {/* <li className={styles['list-container']}><img src={Facebook} alt="" /></li> */}
                        <li className={styles['list-container']}><img src={Spotify} alt="" /></li>
                    </div>
                </div>
                <div className={styles['info-container']}>
                    <div className={styles['rights-container']}>
                        <p>{t('footer.rights')}</p>
                    </div>
                    <div className={styles['conditions-container']}>
                        <p>{t('footer.terms')}</p>
                        <p>{t('footer.privacy')}</p>
                        <p>{t('footer.cookies')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
