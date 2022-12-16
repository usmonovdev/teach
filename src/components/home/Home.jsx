import React, { useEffect } from 'react';
import './home.css';

const Home = () => {

    useEffect(()=> {
        document.title = `AS COMPANY - VEB SAYT YARATISH XIZMATI`
    })
    return (
        <section id='home'>
            <div>
                <h1>IT <span>Xizmatlar</span></h1>
                <h3>Turli xil veb va mobil ishlab chiqish xizmatlari mavjud</h3>
                <h5>Telefon raqam: +998 90 447 75 15</h5>
            </div>
        </section>
    );
};

export default Home;