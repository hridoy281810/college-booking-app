import React from 'react';
import NavBar from '../Pages/share/NavBar/NavBar';
import Home from '../Pages/Home/Home/Home';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/share/Footer/Footer';

const MainLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;