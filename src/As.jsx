import React from 'react';
import Courses from './asteach/courses/Courses';
import Home from "./asteach/home/Home";
import Navbar from './asteach/navbar/Navbar';
import Info from "../src/components/info/Info";
import Footer from "../src/components/footer/Footer";
import 'react-lazy-load-image-component/src/effects/blur.css';

const As = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Courses />
            <Info />
            <Footer />
        </>
    );
};

export default As;