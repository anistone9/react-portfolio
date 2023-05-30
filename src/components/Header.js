import React from 'react';
import '../styles/Header.css';

const styles = {
    headerStyle: {
        background: '776472',
    },
    headingStyle: {
        fontSize: '100px',
    },
};

function Header() {
    return (
        <header style={styles.headerStyle} className="header">
            <h1 style={styles.headingStyle}>Welcome to my page</h1>
        </header>
    );
}

export default Header;