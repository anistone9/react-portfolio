import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import 'holderjs';
import { CDBFooter } from 'cdbreact';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    // check what is the current page, and return the corresponding components
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* pass the currentPage from state and the function to update it */}
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {/*call the renderPage method, which will return a component */}
            {renderPage()}
            <Footer></Footer>
        </div>
    );
}

