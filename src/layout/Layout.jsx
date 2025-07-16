import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Menu from "../components/Menu";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const outletElement = document.getElementById('outlet');
        if (outletElement) {
            if (window.innerWidth <= 768) {
                if (isMenuOpen) {
                    outletElement.classList.remove('menu-closed-mobile');
                    document.body.style.overflow = 'hidden';
                } else {
                    outletElement.classList.add('menu-closed-mobile');
                    document.body.style.overflow = 'auto';
                }
            } else {
                outletElement.classList.remove('menu-closed-mobile');
                document.body.style.overflow = 'auto';
            }
        }

        return () => {
            if (outletElement) {
                outletElement.classList.remove('menu-closed-mobile');
            }
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        
        setIsMenuOpen(false); 

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <>
            <Header toggleMenu={toggleMenu} /> 
            <Menu isOpen={isMenuOpen} />
            <div id="outlet">
                <Outlet />
            </div>
        </>
    );
};

export default Layout;