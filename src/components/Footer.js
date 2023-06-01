import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

export const Footer = () => {
  return (
    <MDBFooter bgColor='dark' className='text-center fixed-bottom'>
    <MDBContainer className='p-4'>
      <MDBRow>
        <MDBCol className='mb-4 mb-md-0'>
          <ul className='list-unstyled mb-0'>
            <li>
              <a href='https://github.com/anistone9' className='text-light'>
                Github
              </a>
            </li>
          </ul>

          <ul className='list-unstyled mb-0'>
            <li>
              <a href='https://www.linkedin.com/in/anistonev/' className='text-light'>
                LinkedIn
              </a>
            </li>
          </ul>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

  </MDBFooter>
  );
};

export default Footer;