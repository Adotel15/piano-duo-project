// import React from 'react';
import './Home.module.css';
import headerImage from '../../assets/Playa.webp';

const Home = () => {
    return (
        <>
            <div className="container-header-img">
                <img className="header-img" src={headerImage} alt="Playa" />
            </div>
            <div className="section">
                <div>Home</div>
            </div>
        </>
    );
};

export default Home;
