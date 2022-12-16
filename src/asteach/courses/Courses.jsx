import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "./courses.css";
import html from "../img/html.jpg";
import js from "../img/javascript.jpg";
import rc from "../img/react.jpg";
import all from "../img/all.png";

const Courses = () => {
    return (
        <div className='courses' id='courses'>
            <h1 className='courseTitle'>VIDEO KURSLAR</h1>
            <div className="courseCont">
                <div className="courseBox">
                    <LazyLoadImage effect='blur' src={html} alt="HTML"/>
                    <div className="courseBody">
                        <h1>HTML CSS BOOTSTRAP MATERIALSIZE</h1>
                        <p>Siz bu kursda bemalol veb-sayt yasash va uni internetga joylab pul ishlashni urganasiz</p>
                    </div>
                    <div className="coursePrice">
                        <h1>NARXI: 150.000usz</h1>
                        <a href="https://t.me/Savlatbek_Abdullayev">
                            <button>XARID QILISH</button>
                        </a>
                    </div>
                </div>
                <div className="courseBox">
                    <LazyLoadImage effect='blur' src={js} alt="HTML"/>
                    <div className="courseBody">
                        <h1>JavaScript</h1>
                        <p>Siz bu kursda JavaScript haqida tuliq ma'lumot olasiz va uziz uchun ham yaxshigini portfolio yig'ib olasiz.</p>
                    </div>
                    <div className="coursePrice">
                        <h1>NARXI: 350.000usz</h1>
                        <a href="https://t.me/Savlatbek_Abdullayev">
                            <button>XARID QILISH</button>
                        </a>
                    </div>
                </div>
                <div className="courseBox">
                    <LazyLoadImage effect='blur' src={rc} alt="HTML"/>
                    <div className="courseBody">
                        <h1>FROM 0 TO PRO REACT JS</h1>
                        <p>Siz bu kursda React JS haqida tuliq ma'lumot olasiz va uziz uchun ham yaxshigini portfolio yig'ib olasiz.</p>
                    </div>
                    <div className="coursePrice">
                        <h1>NARXI: 150.000usz</h1>
                        <a href="https://t.me/Savlatbek_Abdullayev">
                            <button>XARID QILISH</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="courseCont">
                <div className="courseBox" style={{marginTop: "20px"}}>
                    <LazyLoadImage effect='blur' src={all} alt="HTML"/>
                    <div className="courseBody">
                        <h1>BARCHA KURSLAR(FRONT-END)</h1>
                        <p>Tepadagi barcha kurslarni siz mana shu xarid qilish tugmasi orqali xarid qilsihiz mumkin. Pasdagi narx barchasi uchun narx</p>
                    </div>
                    <div className="coursePrice">
                        <h1>NARXI: 600.000usz</h1>
                        <a href="https://t.me/Savlatbek_Abdullayev">
                            <button>XARID QILISH</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;