import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Aos from 'aos';
import "aos/dist/aos.css";
import './about.css';
import logo from '../img/logo.jpg';
import { SiTelegram } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import { SiTiktok } from 'react-icons/si';
import { SiYoutube } from 'react-icons/si';

const About = () => {

    useEffect(() => {
        Aos.init();
    })

    return (
        <div className='about' id='about'>
            <div className='title' data-aos="fade-up" >
                <h1>Biz Haqimizda</h1>
            </div>
            <div className='info'>
                <div className='left' data-aos="zoom-in-left">
                    <LazyLoadImage effect="blur" src={logo} alt="AS Company Logo" style={{width: '300px'}}/>
                </div>
                <div className="right" data-aos="flip-right">
                    <h1>Assalomu Alaykum</h1>
                    <h2><span>`AS COMPANY`</span> ga xush kelibsiz</h2>
                    <h3>... ha, bu ham qachonlardir shunchaki g'oya bo'lgandi. Oddiy tasavvurdan minglab kishilar ishonch bildirgan loyihaga aylandi.</h3>
                    <h4><span>`AS COMPANY`</span> ning ijtimoiy tarmoqlarga havolalar</h4>
                    <div className='links'>
                        <div className='linkBox'>
                            <a href="https://t.me/as_company_rasmiy">
                                <div className='linkSocial'><SiTelegram style={{marginRight: "5px"}}/> Telegram</div>
                            </a>
                            <a href="https://www.instagram.com/invites/contact/?i=11g8l14z2hj2v&utm_content=pm1lcwf">
                                <div className='linkSocial'><SiInstagram style={{marginRight: "5px"}}/> Instagram</div>
                            </a>
                        </div>
                        <div className='linkBox'>
                            <a href="http://tiktok.com/@ascompany01">
                                <div className='linkSocial'><SiTiktok style={{marginRight: "5px"}}/> Tik tok</div>
                            </a>
                            <a href="https://www.youtube.com/channel/UCs2LwWQYF3u8diav7nuB6dg/">
                                <div className='linkSocial'><SiYoutube style={{marginRight: "5px"}}/> Youtube</div>
                            </a>
                        </div>
                    </div>
                    <h5><span>`AS COMPANY`</span> haqida tuliq ma'lumot ijtimoiy tarmoqlarda</h5>
                </div>
            </div>
        </div>
    );
};

About.propTypes = {};

export default About;