import React from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBTypography,
} from 'mdb-react-ui-kit';

import Profile from '../images/Profile.JPG';

const styles = {
    heading: {
        fontSize: '1.5rem',
        padding: '0',
        minHeight: 50,
        lineHeight: 3.5,
    },
    body: {
        margin: 0,
        padding: 20,
    },
};

export default function About() {
    return (
        <div className="gradient-custom-2">
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol sm='12' lg="12" xl="12">
                        <MDBCard>
                            <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                                    <MDBCardImage src={Profile}
                                        alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />

                                </div>
                                <div className="ms-3" style={{ marginTop: '130px' }}>
                                    <MDBTypography tag="h5">Full Stack Developer</MDBTypography>
                                    <MDBCardText>Phoenix, AZ</MDBCardText>
                                </div>
                            </div>
                            <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                                <div className="d-flex justify-content-end text-center py-1">
                                    <div>
                     
                                        <MDBCardText className="small text-muted mb-0"></MDBCardText>
                                    </div>

                                </div>
                            </div>
                            <MDBCardBody className="text-black p-4">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1">About me</p>
                                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                        <MDBCardText className="font-italic mb-1">Full stack web developer with brackground in firmware validation, hardware validation, software testing, IT support, and data analysis.</MDBCardText>
                                        <MDBCardText className="font-italic mb-1">Life-long learner who excels at mastering new skills quickly.</MDBCardText>
                                        <MDBCardText className="font-italic mb-0">Ability to work in fast-paced environment, and collaborate with different teams. </MDBCardText>
                                        <MDBCardText className="font-italic mb-0">Strengths in communication, time management, reporting, and problem solving. </MDBCardText>
                                    </div>
                                </div>
                                
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}