import styles from './Repertoire.module.css';
import Navbar from '../../components/Navbar/NavBar';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header';

import ReperoireImage from '../../assets/Repertoire/Concerts_019.png';
import { useState, useEffect } from 'react';
import React from 'react';

type Repertoire = {
    id : string,
    title : string,
    piece_author : Array<{
        title: string,
        author: string,
    }>
}

const Repertoire = () => {
    const [Repertoires, setRepertoires] = useState <Repertoire[]> ([]);
    const [selectedId, setSelectedId] = useState('1');

    useEffect(() => {
        getRepertoires();
    }, []);

    const getRepertoires = async () => {
        const response = await fetch('http://localhost:8081/v1/api/repertoires');
        const { data } = await response.json();
        setRepertoires(data);

        const defaultRepertoire = data.find((rep: Repertoire) => rep.id === '1');
        if (defaultRepertoire) {
            setSelectedId(defaultRepertoire.id);
        } else if (data.length > 0) {
            setSelectedId(data[0].id);
        }
    };

    return (
        <div className={styles['repertoire-page-container']}>
            <Navbar/>
            <div className={styles['header-repertoire-container']}>
                <Header content='—Repertorio'></Header>
            </div>
            <div className={styles['repertoire-content-container']}>
                <div className={styles['left-repertoire-container']}>
                    <div className={styles['repertoire-menu-container']}>
                        {Repertoires.map(repertoire => {
                            return (
                                <div key={repertoire.id}
                                    onClick={() => setSelectedId(repertoire.id)} defaultValue={'1'}
                                >
                                    <p className={`${styles['repertoire-menu']} 
                                    ${selectedId === repertoire.id ? styles['repertoire-menu-active'] : ''}`}
                                    >
                                        {repertoire.title}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles['image-repertorie-conatiner']}>
                        <img className={styles['image-repertorie']} src={ReperoireImage} alt="Repertoire" />
                    </div>
                </div>
                <div className={styles['right-repertorie-conatiner']}>
                    {selectedId &&
                    Repertoires.filter(repertoire => repertoire.id === selectedId).map(Repertoires => {
                        return (
                            <div className={styles['repertories-conatiner']}>
                                <div className={styles['repertorie-title-conatiner']} key={Repertoires.id}>
                                    <div>{Repertoires.title}</div>
                                </div>
                                <div className={styles['piece-author-content-conatiner']}>
                                    {Repertoires.piece_author.map(piece_author => {
                                        return (
                                            <div className={styles['piece-author-conatiner']}>
                                                <p>{piece_author.title}</p>
                                                <p className={styles['line-repertoire']}></p>
                                                <p>{piece_author.author}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
            <Footer/>
        </div>
    );
};

export default Repertoire;
