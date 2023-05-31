import React from 'react';
import Project from '../Project';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

const styles = {
    heading: {
        fontSize: '1.9rem',
        padding: '0',
        minHeight: 50,
        lineHeight: 3.5,
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
                        <MDBCard>
                            <MDBCardImage
                                src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    This is a longer card with supporting text below as a natural lead-in to additional content.
                                    This content is a little bit longer.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardImage
                                src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    This is a longer card with supporting text below as a natural lead-in to additional content.
                                    This content is a little bit longer.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardImage
                                src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    This is a longer card with supporting text below as a natural lead-in to additional content.
                                    This content is a little bit longer.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardImage
                                src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    This is a longer card with supporting text below as a natural lead-in to additional content.
                                    This content is a little bit longer.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardImage
                                src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    This is a longer card with supporting text below as a natural lead-in to additional content.
                                    This content is a little bit longer.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardImage
                                src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                                alt='...'
                                position='top'
                            />
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>
                                    This is a longer card with supporting text below as a natural lead-in to additional content.
                                    This content is a little bit longer.
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </div>
        </div>
    );
}