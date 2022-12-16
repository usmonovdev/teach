import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { IoMdMenu } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {

    const [icon, setIcon] = useState(true);

    const menu = () => {
        setIcon(!icon)
    }

    return (
        <header className='header'>
            <h1>AS COMPANY</h1>
            <ul className={`box ${icon == false && "active"}`}>
                <li><a className='link' href="#home">Bosh Sahifa</a></li>
                <li><a className='link' href="#about">Biz Haqimizda</a></li>
                <li><Link className='link' to="/asteach">AS TEACH</Link></li>
                <li><a className='link' href="#service">Xizmatlar</a></li>
                <li><a className='link' href="#contact">Bog'lanish</a></li>
            </ul>
            {icon ? <IoMdMenu className='menu' onClick={menu} /> : <IoMdClose className='menu' style={{color: "black"}} onClick={menu} />}
        </header>
    );
};

export default Navbar;