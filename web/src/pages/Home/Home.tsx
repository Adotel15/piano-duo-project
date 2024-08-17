import Button from '../../components/Button/Button';
import styles from './Home.module.css';
import headerImage from '../../assets/Playa.webp';

const Home = () => {
    const handleClick = () => {
        console.log('Button clicked!');
    };

    return (
        <main>
            <div className={styles.container_header_img}>
                <img className={styles.header_img}src={headerImage} alt="Playa" />
            </div>
            <div className={styles.section}>
                <div>Home</div>
            </div>
            <Button label="Click me" onClick={handleClick} />
            <Button label="aloha" onClick={handleClick} />
            <Button label="bon dia" onClick={handleClick} />
            <Button label="bona tarda" onClick={handleClick} />
            <Button label="pinguino" onClick={handleClick} />
            <Button label="zebra" onClick={handleClick} />
            <Button label="luckiluk" onClick={handleClick} />
        </main>
    );
};

export default Home;
