import React from 'react';

const styles = {
    main: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '500' 
    }
}

export default function Home() {
    return (
        <div style={styles.main}>
            <p>Welcome to my page</p>
        </div>
    )
}