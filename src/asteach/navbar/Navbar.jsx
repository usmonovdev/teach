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
            <h1>AS TEACH</h1>
            <ul className={`box ${icon == false && "active"}`}>
                <li><a className='link' href="#home">Bosh Sahifa</a></li>
                <li><Link className='link' to="/">AS COMPANY</Link></li>
                <li><a className='link' href="#courses">Kurslar</a></li>
            </ul>
            {icon ? <IoMdMenu className='menu' onClick={menu} /> : <IoMdClose className='menu' style={{color: "black"}} onClick={menu} />}
        </header>
    );
};

export default Navbar;