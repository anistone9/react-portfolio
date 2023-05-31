import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBCardLink
} from 'mdb-react-ui-kit';

//import images from 'images' folder
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image5 from '../images/image5.png';
import image6 from '../images/image6.png';
import image11 from '../images/image11.png';
import image42 from '../images/image42.png';

const styles = {
    heading: {
        fontSize: '1.8rem',
        padding: '0',
        minHeight: 50,
        lineHeight: 2.5,
    },
    body: {
        margin: 0,
        padding: 20,
    },
}

export default function Portfolio() {
    return (
        <div style={styles.body}>
            <h1 style={styles.heading}>Portfolio</h1>
            <div>
                <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                    <MDBCol>
                        <MDBCard className='h-100'>
                            <MDBCardImage
                                src={image11}
                                alt='travel blog'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Travel Blog</MDBCardTitle>
                                <MDBCardText>
                                    Travel Blog with Pet-Friendly and Family-Friendly filters, email share options, comments, image upload, as well as like buttons
                                </MDBCardText>
                                <MDBCardLink href='#https://github.com/LL8719/Travel-Blog'>Github</MDBCardLink>
                                <MDBCardLink href='#https://passport-adventures.herokuapp.com/homepage'>Deployed App</MDBCardLink>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard className='h-100'>
                            <MDBCardImage
                                src={image2}
                                alt='job search'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Job Search Board</MDBCardTitle>
                                <MDBCardText>
                                    Tech Job Search App with options and filters for remote jobs, full-time and part-time jobs, fullstack vs frontend vs backend.
                                </MDBCardText>
                                <MDBCardLink href='#https://github.com/MacaroniKetchup/Webdev-Remote-Job-Search-App'>Github</MDBCardLink>
                                <MDBCardLink href='#https://macaroniketchup.github.io/Webdev-Remote-Job-Search-App/'>Deployed App</MDBCardLink>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard className='h-100'>
                            <MDBCardImage
                                src={image3}
                                alt='book search'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Book Search Engine</MDBCardTitle>
                                <MDBCardText>
                                    MERN Stack App using React, MongDB, Node.js, Express.js, and GraphQL API
                                </MDBCardText>
                                <MDBCardLink href='#https://github.com/anistone9/book-search-engine'>Github</MDBCardLink>
                                <MDBCardLink href='#https://guarded-shelf-57906.herokuapp.com/'>Deployed App</MDBCardLink>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard className='h-100'>
                            <MDBCardImage
                                src={image42}
                                alt='note taker'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Note Taker</MDBCardTitle>
                                <MDBCardText>
                                    Application using Express.js on the backend to write and save notes.
                                </MDBCardText>
                                <MDBCardLink href='#https://github.com/anistone9/note-taker'>Github</MDBCardLink>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard className='h-100'>
                            <MDBCardImage
                                src={image5}
                                alt='test editor'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Text Editor</MDBCardTitle>
                                <MDBCardText>
                                    Text Editor App built using Progressive Web Applications criteria, with offline functionality
                                </MDBCardText>
                                <MDBCardLink href='#https://github.com/anistone9/pwa-text-editor'>Github</MDBCardLink>
                                <MDBCardLink href='#https://fathomless-peak-36309.herokuapp.com/'>Deployed App</MDBCardLink>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard className='h-100'>
                            <MDBCardImage
                                src={image6}
                                alt='social network'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Social Network API</MDBCardTitle>
                                <MDBCardText>
                                    Backend created for a social network-style application. Created using Express.js, MongoDB, and Mongoose.
                                </MDBCardText>
                                <MDBCardLink href='#https://github.com/anistone9/social-network-api'>Github</MDBCardLink>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div>
        </div>
    );
}