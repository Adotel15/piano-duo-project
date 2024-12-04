import styles from'./Biography.module.css';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Header/Header';
import imageBiography from '../..//assets/Biography/Concerts_014 1.png';

const Biography = () => {
    return (
        <div>
            <div className="menu-container">
                <Menu />
            </div>
            <div className={styles['header-container']}>
                <Header content='—Biografía'></Header>
            </div>
            <div className={styles['section-container']}>
                <section className={styles['details-container']}>
                    <div className={styles['education-container']}>
                        <ul>
                            <h3 className={styles['titulo-lista']}>Formación</h3>
                            <li className={styles['education-listItem']}>Conservatorio del Liceo.<br />Barcelona</li>
                            <li className={styles['education-listItem']}>Academia Franz Liszt.<br />Budapest</li>
                            <li className={styles['education-listItem']}>Manhattan School of Music.<br />Nueva York </li>
                        </ul>
                    </div>
                    <div className={styles['titles-container']}>
                        <ul>
                            <h3 className={styles['titulo-lista']}>Títulos</h3>
                            <li className={styles['titles-listItem']}>“Doctor of Musical Arts”<br />Manhattan School of Music.<br />Nueva York </li>
                            <li className={styles['titles-listItem']}>“Master of Music”<br />Manhattan School of Music.<br />Nueva York</li>
                        </ul>
                    </div>
                    <div className={styles['awards-container']}>
                        <ul>
                            <h3 className={styles['titulo-lista']}>Premios</h3>
                            <li className={styles['awards-listItem']}>1er Premio<br />Concurso Jeunesses Musicales — España</li>
                            <li className={styles['awards-listItem']}>1er Premio<br />Concursos internacionales de Finale-Ligure — España</li>
                            <li className={styles['awards-listItem']}>Premio especial “Amigos de Mozart”<br />Concurso Internacional de Música de Cámara — París </li>
                            <li className={styles['awards-listItem']}>2º Premio<br />Caltanissetta — Italia</li>
                            <li className={styles['awards-listItem']}>3er Premio<br />Concurso de dos pianos “Murray Dranoff — Miami</li>
                            <li className={styles['awards-listItem']}>1er Premio<br />Audiciones de Artistas Internacionales </li>
                        </ul>
                    </div>
                </section>
                <section className={styles['biography-container']}>
                    <h3 className={styles['biography-title']}>Luis y Lourdes Pérez-Molina</h3>
                    <div className={styles['biography-content']}>
                        <p>
                            Lluís y Mª Lourdes Pérez Molina forman un destacado dúo de pianos, reconocido por sus actuaciones a nivel nacional e internacional. Ambos hermanos realizaron los estudios en el Conservatorio Superior de Música del Liceo de Barcelona, la Academia Franz Liszt de Budapest y la Manhattan School of Music de Nueva York, donde obtuvieron un <span>Máster</span> y un <span>Doctorado en Artes Musicales</span>.
                        </p>
                        <p>
                            A lo largo de su carrera profesional han realizado giras de conciertos en países como España, Italia, Suiza, Hungría, Bulgaria, Estados Unidos (New York, New Jersey, Illinois, Missouri, Connecticut, Wisconsin y Florida) y Colombia (Bogotá, Cali, Medellín y Bucaramanga).
                        </p>
                        <p>
                            Como solistas, han colaborado con orquestas como la Orquesta Sinfónica de Barcelona y Nacional de Cataluña, la European Union Chamber Orchestra, la Orquesta Filarmónica de Florida, la Real Filharmonía de Galicia, los "Solistes de Catalunya", Orquesta Sinfónica del “Valle del Cauca”, Orquesta Sinfónica “Julià Carbonell”, bajo la dirección de reconocidos directores como Antoni Ros Marbà, Christian Zacharias, Francesco Belli, Matthias Wollong, Virgínia Martínez, Alfons Reverté, ...
                        </p>
                        <p>
                            El dúo ha grabado varios CDs (<span>Los 2 pianos en el siglo XX</span>, <span>Fantasías para dúo de pianos</span>, etc.), y ha realizado numerosas grabaciones para radios y televisiones tanto en España como en el extranjero. Además, han recibido múltiples premios de música de cámara, incluyendo el <span>primer premio</span> en el V Concurso Permanente de Juventudes Musicales de España, el <span>segundo premio</span> en el II Concurso Yamaha, el <span>premio especial "Amis de Mozart"</span> en el Concurso Internacional de Música de Cámara de París, <span>primer premio</span> en Finale-Ligure (Italia), <span>segundo premio</span> en Caltanisseta (Italia) y el <span>tercer premio</span> en el Concurso Internacional “ Dranoff “ para dos pianos de Miami. En 1993 ganaron el “Artists International Auditions” y fueron presentados en un New York debut en la Weill Recital Hall del Carnegie Hall, que supuso un importante impulso a su carrera profesional.
                        </p>
                        <p>
                            Merece la pena destacar el trabajo de investigación que han realizado los hermanos Pérez Molina, en el conocimiento de la literatura para dos pianos y piano a 4 manos.
                        </p>
                    </div>
                    <img className={styles['image-Biography']}src={imageBiography} alt="Concert" />
                </section>
            </div>
        </div>
    );
};

export default Biography;
