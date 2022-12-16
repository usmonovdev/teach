import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Aos from 'aos';
import info from '../img/info.png';
import { SiTelegram } from 'react-icons/si';
import "../service/service.css";
import "./info.css";
import { Link } from 'react-router-dom';

const Info = () => {

    useEffect(() => {
        Aos.init();
    })

    return (
        <div className='infoComp'>
            <div className="infoBox">
                <div className='infoTitle' data-aos="fade-up" data-aos-duration="3000">
                    <h1>AS TEACH</h1>
                </div>
                <div className="infoAdd">
                    <h1>Assalomu Alaykum, Bizning xizmarlar asosan veb-sayt ishlab chiqishga qaratilgan.</h1>
                </div>
                <div className="infoCard" data-aos="zoom-in-up">
                    <LazyLoadImage effect='blur' src={info} alt="AS Teach"/>
                    <div className="infoCardBody">
                        <h1>AS-TEACH - Eng Kuchli front end dasturchi bo'lish uchun to'g'ri yo'l</h1>
                        <h1>Afzalliklari: <br />1. 🎁🎉20% chegirmalarda xarid qiling!🎁🎉. <br /> 2. Narxi Arzonligi va sifatliligi</h1>
                        <h1>O'rgatiladigan Texnalogiyalar: REACTJS, JAVASCRIPT, CSS, HTML, BOOTSTRAP, MATERIALSIZE.</h1>
                        <h1>Kurs Turi: Onlayn <br />Kurs Davomiyligi: 6oy <br />NARXI: barchasi uchun 600.000 <br />sum Real loyihalar soni: 15+</h1>
                        <h1>Admin: <a href="https://t.me/as_company_01">https://t.me/as_company_01</a></h1>
                        <h1>Rasmiy Kanal: <a href="https://t.me/as_company_rasmiy">https://t.me/as_company_rasmiy</a></h1>
                        <h1>tel: +998 90 447 75 15</h1>
                        <Link className='infoLink' to="/asteach#courses">Sahifaga o'tish</Link>
                    </div>
                </div>
                <div className='infoDiscount'>
                    <h1 className='discountTitle'>Aksiya mavjud</h1>
                    <h1 className='discountAbout'>Siz aksiya haqida telegramdan ma'lumot olishingiz mumkin</h1>
                    <a href="https://t.me/as_company_rasmiy" style={{textDecoration: "none"}}>
                        <div className="linkBtn">
                            <SiTelegram style={{marginRight: "5px"}}/> Telegram
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Info;