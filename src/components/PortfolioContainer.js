import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Header from './Header';
import Footer from './Footer';
import Project from './Project';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'holderjs';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    // check what is the current page, and return the corresponding components
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
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
        <div className=".bg-dark.bg-gradient">
            {/* pass the currentPage from state and the function to update it */}
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {/*call the renderPage method, which will return a component */}
            {renderPage()}
        </div>
    );
}

