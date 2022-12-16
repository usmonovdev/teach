import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import making from "../img/making.png";
import mobile from "../img/mobile.png";
import video from "../img/logo-video.mp4";
import { SiTelegram } from 'react-icons/si';
import { FaPlay } from 'react-icons/fa';
import "./service.css";

const Service = () => {
    return (
        <div className='service' id='service'>
            <div className='serviceBox'>
                <div className='serviceTitle' data-aos="fade-up" data-aos-duration="3000">
                    <h1>Xizmatlar</h1>
                </div>
                <div className='titleInfo'>
                    <h1>Assalomu Alaykum, Bizning xizmatlar asosan veb-sayt ishlab chiqishga qaratilgan.</h1>
                </div>
                <div className='cards'>
                    <div className="card" data-aos="zoom-in-up">
                        <LazyLoadImage effect='blur' src={making} alt="making" style={{height: "167px"}}/>
                        <div className="cardBody">
                            <h1>Vebsayt ishlab chiqish</h1>
                            <p>Biz sizga veb saytlar tayyorlab beramiz.</p>
                            <a href="https://t.me/Savlatbek_Abdullayev" target="_blank">
                                <button>Buyurtma berish</button>
                            </a>
                        </div>
                    </div>
                    <div className="card" data-aos="zoom-in-up">
                        <LazyLoadImage effect='blur' src={mobile} alt="mobil"/>
                        <div className="cardBody">
                            <h1>Mobil dastur ishlab chiqish</h1>
                            <p>Biz sizga mobil ilova tayyorlab beramiz.</p>
                            <a href="https://t.me/Savlatbek_Abdullayev" target="_blank">
                                <button>Buyurtma berish</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='discount'>
                    <h1 className='discountTitle'>Aksiya mavjud</h1>
                    <h1 className='discountAbout'>Siz aksiya haqida telegramdan ma'lumot olishingiz mumkin</h1>
                    <a href="https://t.me/as_company_rasmiy" style={{textDecoration: "none"}}>
                        <div className="linkBtn">
                            <SiTelegram style={{marginRight: "5px"}}/> Telegram
                        </div>
                    </a>
                </div>
            </div>
            <div className="video">
                <a href={video} target="_blank"><FaPlay className='playIcon' /></a>
            </div>
        </div>
    );
};

export default Service;