import React from 'react';
import '../styles/NavTabs.css';

const styles = {
  navtabsStyle: {
    background: 'primary',
    justifyCenter: 'flex-left',
    align: 'right',
  },
};

// use object destructuring assignment to access the variables from the props object
function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="nav navtabs" style={styles.navtabsStyle}>
        <li className="nav navtabs" style={styles.navtabsStyle}>Ani Toal</li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            // conditional (ternary) operator that checks to see if the current page is "About"
            // if it is, set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            // check to see if the currentPage is `Portfolio`; if it is, use the active link class from bootstrap
            // otherwise set it to a normal nav-link
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            // check to see if the currentPage is `Contact`; if it is, use the active link class from bootstrap
            // otherwise set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            // check to see if the currentPage is `Resume`; it if is, use the active link class from bootstrap
            // otherwise set it to a normal nav-link
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
    );
}

export default NavTabs;