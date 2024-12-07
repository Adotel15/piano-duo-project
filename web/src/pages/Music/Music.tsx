import styles from './Music.module.css';
import Navbar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';

//Assets
import FrontCD1 from '../../assets/Cds/DVD_02.png';
import FrontCD2 from '../../assets/Cds/DVD_05.png';
import FrontCD3 from '../../assets/Cds/DVD_13.png';
import FrontCD4 from '../../assets/Cds/DVD_09.png';

const Music = () => {
    return (
        <div>
            <Navbar/>
            <div className={styles['header-container']}>
                <Header content='—Cds'></Header>
            </div>
            <div className={styles['sections-container']}>
                <section className={styles['CD-1']}>
                    <div className={styles['CD-img-container']}>
                        <img src={FrontCD1} alt="CD 1" />
                    </div>
                    <div className={styles['content-container']}>
                        <div className={styles['h3-container']}>
                            <h3>Els dos pianos al segle XX  (1990)</h3>
                        </div>
                        <p className={styles['author']}>Maria Lourdes & Lluís Pérez-Molina</p>
                        <h4>Canciones</h4>
                        <div className={styles['ol-container']}>
                            <ol>
                                <li>Scaramouche, suite per a dos pianos - Darius Milhaud
                                    <p className={styles['extraMusic-listItem']}>
                                    I Vif - 2:36<br />II Modéré - 3:22 <br />III Brazileira - 2:15
                                    </p>
                                </li>
                                <li>La Valse, transcripció per a dos pianos - Maurice Ravel - 11:29</li>
                                <li>Variacions sobre un tema de Paganini, per a dos pianos - Witold Lutoslawski - 5:10</li>
                                <li>Sardana, de la suite Aguafuertes (Versió per a dos pianos) - Joaquim Zamacois - 4:00</li>
                                <li>Tres divertiments, versió per a dos pianos - Xavier Montsalvatge
                                    <p className={styles['extraMusic-listItem']}>
                                        Deciso (en forma de xotis) - 1:58 <br />Dolce (en forma d’havanera) - 1:48 <br />Vivo (en forma de vals-jota) - 2:03
                                    </p>
                                </li>
                                <li>Dos invencions - Joaquim Homs
                                    <p className={styles['extraMusic-listItem']}>
                                        Moderato - 6:19 <br />Vivace - 2:06
                                    </p>
                                </li>
                                <li>Géminis, per a dos pianos - Francesc Taverna-Bech - 8:56</li>
                            </ol>
                        </div>
                    </div>
                </section>
                <section className={styles['CD-2']}>
                    <div className={styles['CD-img-container']}>
                        <img src={FrontCD2} alt="CD 2" />
                    </div>
                    <div className={styles['content-container']}>
                        <div className={styles['h3-container']}>
                            <h3>Schubert / Rachmaninof / Scriabin / Gershwin: Fantasies per a Piano Duet (1998)</h3>
                        </div>
                        <p className={styles['author']}>Maria Lourdes & Lluís Pérez-Molina</p>
                        <h4>Canciones</h4>
                        <div className={styles['ol-container']}>
                            <ol>
                                <li>Fantasia en fa menor, Op. 103, D 940, per a piano a quatre mans - Maria & Lluís Pérez-Molina y Franz Schubert (19:31)</li>
                                <li>Suite n. 1, Op. 5 "Fantasia", per a dos pianos - Maria & Lluís Pérez-Molina (7:52)</li>
                                <li>Suite n. 1, Op. 5 "Fantasia", per a dos pianos - Maria & Lluís Pérez-Molina (6:22)</li>
                                <li>Suite n. 1, Op. 5 "Fantasia", per a dos pianos - Maria & Lluís Pérez-Molina (6:23)</li>
                                <li>Suite n. 1, Op. 5 "Fantasia", per a dos pianos - Maria & Lluís Pérez-Molina (2:24)</li>
                                <li>Fantasia Op. pòstum, per a dos pianos - Maria & Lluís Pérez-Molina y Alexander Scriabin (6:45)</li>
                                <li>Fantasia de Porgy and Bess, per a dos pianos - Maria & Lluís Pérez-Molina (21:04)</li>
                            </ol>
                        </div>
                    </div>
                </section>
                <section className={styles['CD-3']}>
                    <div className={styles['CD-img-container']}>
                        <img src={FrontCD3} alt="CD3" />
                    </div>
                    <div className={styles['content-container']}>
                        <div className={styles['h3-container']}>
                            <h3> Integral De L'Obra Per A Piano - Vol. I (1998)</h3>
                        </div>
                        <p className={styles['author']}>Maria Lourdes & Lluís Pérez-Molina</p>
                        <h4>Canciones</h4>
                        <div>
                            <ol className={styles['CD3-orderedList']}>
                                <div>
                                    <li>Vivencies 1. Quadern I - 1:10</li>
                                    <li>Vivencies 1. Quadern II - 1:22</li>
                                    <li>Vivencies 1. Quadern III - 1:07</li>
                                    <li>Vivencies 1. Quadern IV - 3:11</li>
                                    <li>Vivencies 1. Quadern V - 0:40</li>
                                    <li>Vivencies 1. Quadern VI - 1:52</li>
                                    <li>Vivencies 1. Quadern VII - 1:09</li>
                                    <li>Vivencies 1. Quadern VIII - 1:46</li>
                                    <li>Vivencies 1. Quadern IX - 1:27</li>
                                    <li>Tríptic I - 2:51</li>
                                </div>
                                <div>
                                    <li>Tríptic II - 3:20</li>
                                    <li>Tríptic III - 3:08</li>
                                    <li>Dos Poemes I - 2:43</li>
                                    <li>Dos Poemes II - 2:03</li>
                                    <li>Cinc Llunyanies I - 4:33</li>
                                    <li>Cinc Llunyanies II - 3:33</li>
                                    <li>Cinc Llunyanies III - 3:04</li>
                                    <li>Cinc Llunyanies IV - 5:22</li>
                                    <li>Cinc Llunyanies V - 6:40.</li>
                                </div>
                            </ol>
                        </div>
                    </div>
                </section>
                <section className={styles['CD-4']}>
                    <div className={styles['CD-img-container']}>
                        <img src={FrontCD4} alt="CD-4" />
                    </div>
                    <div className={styles['content-container']}>
                        <div className={styles['h3-container']}>
                            <h3>Llorenç balsach – visions grotesques (1997)</h3>
                        </div>
                        <h4 className={styles['CD4-subtitle']}>Canciones e intérpretes</h4>
                        <div className={styles['ol-container']}>
                            <ol>
                                <li>Gran Copa Especial (1979), per a orquestra - Joan Lluís Moraleda & Orquestra Ciutat De Barcelona (9:15)</li>
                                <li>Visions Grotesques (1992), per a orquestra - Isaac Karabtchevsky & Orquestra Simfònica De Barcelona I Nacional De Catalunya (19:50)</li>
                                <li>Rondo (1983), per a conjunt de cambra - Ensemble 2E2M (12:04)</li>
                                <li>Ritmes D'Ultramar (1991), per a dos pianos - Bossa-Nova - Lluís Pérez-Molina & Maria Lourdes Pérez-Molina (2:20)</li>
                                <li>Ritmes D'Ultramar (1991), per a dos pianos - Samba - Lluís Pérez-Molina & Maria Lourdes Pérez-Molina (3:18)</li>
                                <li>Trio Per A Cordes (1992) - Fantasia - Trio À Cordes De Paris (4:54)</li>
                                <li>Trio Per A Cordes (1992) - Balada - Trio À Cordes De Paris (3:42)</li>
                                <li>Trio Per A Cordes (1992) - Caprici - Trio À Cordes De Paris (2:54)</li>
                                <li>Musica-Magica (1992), per a mag i conjunt de cambra - Miquel Gaspà & Grupo Música XXI (9:46)</li>
                            </ol>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Music;
