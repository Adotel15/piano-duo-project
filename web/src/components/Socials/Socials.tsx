import { Link } from 'react-router-dom';
// import facebook from '../../assets/SocialMedia/facebook.png';
// import instagram from '../../assets/SocialMedia/instagram.png';
// import linkedin from '../../assets/SocialMedia/linkedin.png';
import spotify from '../../assets/SocialMedia/spotify.png';
import youtube from '../../assets/SocialMedia/youtube.png';
import styles from './Socials.module.css';

const Socials = () => {
    return(
        <div className={styles['socials-container']}>
            <div>
                <Link to=''><img src={youtube} alt="youtube icon" className={styles['icon']}/></Link>
            </div>
            {/* <div>
                <Link to=''><img src={linkedin} alt="linkedin icon" className={styles['icon']}/></Link>
            </div>
            <div>
                <Link to=''><img src={instagram} alt="instagram icon" className={styles['icon']}/></Link>
            </div>
            <div>
                <Link to=''><img src={facebook} alt="facebook icon" className={styles['icon']}/></Link>
            </div> */}
            <div>
                <Link to=''><img src={spotify} alt="spotify icon" className={styles['icon']}/></Link>
            </div>
        </div>
    );
};

export default Socials;
