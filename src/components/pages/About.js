import React from 'react';

const styles = {
    heading: {
        fontSize: '1.2rem',
        padding: '0',
        minHeight: 50,
        lineHeight: 3.5,
        color: '#fbfbfb',
    },
    body: {
      margin: 0,
      padding: 20,
    },
};

export default function About() {
    return (
        <div style={styles.body}>
            <h1 style={styles.heading}>About me</h1>
            <p>Full-stack web developer with background in firmware validation, hardware validation, software testing, IT support, and data analysis. Life-long learner who excels at mastering new skills quickly. Ability to work in fast-paced environment, and collaborate with different teams. Strengths in communication, time management, reporting, and problem solving.</p>
        </div>
    );
}