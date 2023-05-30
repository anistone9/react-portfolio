import React from 'react';
import '../styles/Hero.css';

const styles = {
    headerStyle: {
        background: 'gray',
    },
    headingStyle: {
        fontSize: '100px',
    },
};

function Hero() {
    return (
        <header style={styles.headerStyle} className="header">
            <h1 style={styles.headingStyle}>Welcome to my page</h1>
        </header>
    );
}

export default Hero;