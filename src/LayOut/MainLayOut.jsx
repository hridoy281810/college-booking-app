import React from 'react';
import NavBar from '../Pages/share/NavBar/NavBar';
import Home from '../Pages/Home/Home/Home';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/share/Footer/Footer';

const MainLayOut = () => {
    return (
        <div >

            <NavBar></NavBar>
           <div className='min-h-[calc(100vh-479px)] mx-auto'>
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;