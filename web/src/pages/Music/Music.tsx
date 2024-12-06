import styles from './Music.module.css';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Header/Header';

//Assets
import FrontCD1 from '../../assets/Cds/DVD_02.png';
import FrontCD2 from '../../assets/Cds/DVD_05.png';
import FrontCD3 from '../../assets/Cds/DVD_13.png';
import FrontCD4 from '../../assets/Cds/DVD_09.png';

const Music = () => {
    return (
        <div>
            <div>
                <Menu />
            </div>
            <div className={styles['header-container']}>
                <Header content='—Cds'></Header>
            </div>
            <div className={styles['sections-container']}>
                <section className={styles['CD-1']}>
                    <img src={FrontCD1} alt="CD 1" />
                    <div className={styles['content-container']}>
                        <div className={styles['h3-container']}>
                            <h3>Els dos pianos al segle XX  (1990)</h3>
                        </div>
                        <p className={styles['author']}>Maria Lourdes & Lluís Pérez-Molina</p>
                        <h4>Canciones</h4>
                        <p></p>
                    </div>
                </section>
                <section className={styles['CD-3']}>
                    <img src={FrontCD2} alt="CD 2" />
                    <div className={styles['content-container']}>
                        <div className={styles['h3-container']}>
                            <h3>Schubert / Rachmaninof / Scriabin / Gershwin: Fantasies per a Piano Duet (1998)</h3>
                        </div>
                        <p className={styles['author']}>Maria Lourdes & Lluís Pérez-Molina</p>
                        <h4>Canciones</h4>
                        <p></p>
                    </div>
                </section>
                <section className={styles['CD-2']}>
                    <img src={FrontCD3} alt="" />
                    <div className={styles['content-container']}>
                        <div className={styles['h3-container']}>
                            <h3> Integral De L'Obra Per A Piano - Vol. I (1998)</h3>
                        </div>
                        <p className={styles['author']}>Maria Lourdes & Lluís Pérez-Molina</p>
                        <h4>Canciones</h4>
                        <p></p>
                    </div>
                </section>
                <section className={styles['CD-3']}>
                    <img src={FrontCD4} alt="" />
                    <div className={styles['content-container']}>
                        <div className={styles['h3-container']}>
                            <h3>Llorenç balsach – visions grotesques (1997)</h3>
                        </div>
                        <h4>Canciones e intérpretes</h4>
                        <p></p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Music;
