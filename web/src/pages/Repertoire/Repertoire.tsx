import styles from './Repertoire.module.css';
import Navbar from '../../components/Navbar/NavBar';
import Footer from '../../components/footer/Footer';
import Header from '../../components/Header/Header';
import { useState, useEffect } from 'react';

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

    useEffect(() => {
        getRepertoires();
    }, []);

    const getRepertoires = async () => {
        const response = await fetch('http://localhost:8081/v1/api/repertoires');
        const { data } = await response.json();
        setRepertoires(data);
    };

    return (
        <div>
            <Navbar/>
            <div className={styles['header-repertoire-container']}>
                <Header content='—Repertorio'></Header>
            </div>
            <div>
                {Repertoires.map(Repertoires => {
                    return (
                        <>
                            <div key={Repertoires.id}>
                                <div>{Repertoires.title}</div>
                            </div>
                            <div>
                                {Repertoires.piece_author.map(piece_author => {
                                    return (
                                        <div>

                                            <div>
                                                {piece_author.title}
                                            </div>
                                            <div>
                                                {piece_author.author}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    );
                })}

            </div>
            <Footer/>
        </div>
    );
};

export default Repertoire;
