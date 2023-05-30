import React from 'react';
import Pdf from '../../utils/resume.pdf';

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
}

export default function Resume() {
    return (
        <div style={styles.body}>
            <h5>Download my <a href={Pdf} target="_blank">resume </a>
            </h5>
            <h5>Technical skills</h5>
                <h6>Frontend
                    <ul>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>JQuery</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>Object Oriented Principles</li>
                        <li>UI/UX Design</li>
                    </ul>
                </h6>
                <h6>Backend
                    <ul>
                        <li>MongoDB</li>
                        <li>GraphQL</li>
                        <li>MySQL</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MVC Framework</li>
                        <li>Handlebars</li>
                    </ul>
                </h6>
                <h6>Deployment
                    <ul>
                        <li>GitHub</li>
                        <li>Heroku</li>
                    </ul>
                </h6>
                <h6>Agile
                    <ul>
                        <li>Scrum Master</li>
                        <li>Product Owner</li>
                    </ul>
                </h6>
        </div>
    )
}