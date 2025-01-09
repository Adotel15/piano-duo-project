import styles from './Loader.module.css';

/** TODO: Decide what loader to do */
const Loader = () => {
    return (
        <div className={styles['loader-container']}>
            <p>Loading...</p>
        </div>
    );
};

export default Loader;
