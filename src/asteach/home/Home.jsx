import React, { useEffect } from 'react';
import './home.css';

const Home = () => {

    useEffect(() => {
        document.title = `AS TEACH - SIFATLI TA'LIM`
    })

    return (
        <div id='home' className='asHome'>
            <div>
                <h1>Mahsulotlar</h1>
                <h3>AS TEACH loyihasi doirasida bir nechta mukammal videokurslar va dasturlar ishlab chiqilgan. Bizning shogirdlar kurslarni juda ko'p maqtashadi</h3>
            </div>
        </div>
    );
};

export default Home;