import React from 'react';
import "./contact.css";

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className='infoTitle' data-aos="fade-up" data-aos-duration="3000">
                <h1>AS TEACH</h1>
            </div>
            <div className="contactCard">
                <div className="contLeft">
                    <h1 className='contText'>Telefon raqam: <br /> <a href="tel:+998 90 447 75 15">+998 90 447 75 15</a></h1>
                </div>
                <div className="contRight">
                    <h1 className='contText'>Telegram: <a href="https://t.me/Savlatbek_Abdullayev">@Savlatbek_Abdullayev</a></h1>
                    <h1 className='contText'>Gmail: <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwQnXPQFhWGcXVkPCWJsDQqDxxgVlQrHDFXZffTkqQWXcKqvSVTDGLMxNNbwCxRJLFZtRJB">savlatbek009@gmail.com</a></h1>
                </div>
            </div>
            <div className="send">
                <h1>Gmailga savol yuborish</h1>
                <div className="sendInp">
                    <input type="text" placeholder='To`liq ism familiya' />
                    <input type="email" placeholder='Elektron pochtngiz' />
                    <textarea cols="30" rows="10" placeholder='Malumot'></textarea>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwQnXPQFhWGcXVkPCWJsDQqDxxgVlQrHDFXZffTkqQWXcKqvSVTDGLMxNNbwCxRJLFZtRJB">
                        <button>Yuborish</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;