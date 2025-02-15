import { useState, useEffect } from 'react';

import Navbar from '../../components/Navbar/NavBar';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header';

import styles from './Repertoire.module.css';

import ReperoireImage from '../../assets/Repertoire/Concerts_019.png';

type Repertoire = {
    id : string,
    title : string,
    piece_author : Array<{
        title: string,
        author: string,
    }>
}

const Repertoire = () => {
    const [repertoires, setRepertoires] = useState <Repertoire[]> ([]);
    const [selectedId, setSelectedId] = useState('1');

    useEffect(() => {
        getRepertoires();
    }, []);

    const getRepertoires = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/repertoires`);
            const { data } = await response.json();
            setRepertoires(data);

            const defaultRepertoire = data.find((rep: Repertoire) => rep.id === '1');
            if (defaultRepertoire) {
                setSelectedId(defaultRepertoire.id);
            } else if (data.length > 0) {
                setSelectedId(data[0].id);
            }
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log('Error fetching repertoires', error);
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
                        {repertoires.map(repertoire => {
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
                    repertoires.filter(repertoire => repertoire.id === selectedId).map(repertoire => {
                        return (
                            <div className={styles['repertories-conatiner']}>
                                <div className={styles['repertorie-title-conatiner']} key={repertoire.id}>
                                    <div>{repertoire.title}</div>
                                </div>
                                <div className={`${styles['piece-author-content-container']} ${repertoire.id === '4' ? styles['piece-author-4-content-container'] : ''}`}>
                                    {repertoire.piece_author.map(piece_author => {
                                        return (
                                            <div className={`${styles['piece-author-conatiner']} ${repertoire.id === '4' ? styles['piece-author-4-container'] : ''}`}>
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
                <div className={styles['image-repertorie-conatiner-mobile']}>
                    <img className={styles['image-repertorie-mobile']} src={ReperoireImage} alt="Repertoire" />
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Repertoire;
