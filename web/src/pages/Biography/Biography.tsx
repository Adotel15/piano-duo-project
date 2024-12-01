import './Biography.module.css';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Header/Header';

const Biography = () => {
    return (
        <div>
            <div>
                <Menu />
            </div>
            <Header content='—Biografía'></Header>
            <div className='content-container'>
                <section className='details-container'>
                    <div className='education-container'>
                        <ul>
                            <li className='education-listItem'>Conservatorio del Liceo.<br />Barcelona</li>
                            <li className='education-listItem'>Academia Franz Liszt.<br />Budapest</li>
                            <li className='education-listItem'>Manhattan School of Music.<br />Nueva York </li>
                        </ul>
                    </div>
                    <div className='titles-container'>
                        <ul>
                            <li className='titles-listItem'>“Doctor of Musical Arts”<br />Manhattan School of Music.<br />Nueva York </li>
                            <li className='titles-listItem'>“Master of Music”<br />Manhattan School of Music.<br />Nueva York</li>
                        </ul>
                    </div>
                    <div className='awards-container'>
                        <ul>
                            <li className='awards-listItem'>1er Premio<br />Concurso Jeunesses Musicales — España</li>
                            <li className='awards-listItem'>Premio especial “Amigos de Mozart”<br />Concurso Internacional de Música de Cámara — París </li>
                            <li className='awards-listItem'>1er Premio<br />Concursos internacionales de Finale-Ligure — España</li>
                            <li className='awards-listItem'>2º Premio<br />Caltanissetta — Italia</li>
                            <li className='awards-listItem'>3er Premio<br />Concurso de dos pianos “Murray Dranoff — Miami</li>
                            <li className='awards-listItem'>1er Premio<br />Audiciones de Artistas Internacionales </li>
                        </ul>
                    </div>
                </section>
                <section className='biography-container'>
                    <div className='biography-title'>Luis y Lourdes Pérez-Molina</div>
                    <div className='biography-content'></div>
                    <img src="" alt="" />
                </section>
            </div>
        </div>
    );
};

export default Biography;
