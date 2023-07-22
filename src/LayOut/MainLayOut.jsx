import React from 'react';
import NavBar from '../Pages/share/NavBar/NavBar';
import Home from '../Pages/Home/Home/Home';
import { Outlet } from 'react-router-dom';

const MainLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;