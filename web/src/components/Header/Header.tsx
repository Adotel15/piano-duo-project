import styles from './Header.module.css';

const Header = ({ content } : { content:string }) => {
    return (
        <h2 className={styles ['h2']}>{content}</h2>
    );
};

export default Header;
