import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

//import 'mdbreact/dist/css/mdb.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <MDBFooter className='bg-dark text-center text-white fixed-bottom'>
            <MDBContainer className='p-4 pb-0'>
                <section className='mb-4'>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon fab icon='google' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/anistonev/' role='button'>
                        <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='https://github.com/anistone9' role='button'>
                        <MDBIcon fab icon='github' />
                    </MDBBtn>

                </section>
            </MDBContainer>
        </MDBFooter>
    )
}

export default Footer;