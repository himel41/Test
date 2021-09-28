import React from 'react';
import Navs from '../Header/Nav/Nav';
import Banners from '../Header/Banner/Banner';

import Abouts from '../AboutUs/About';
import Services from '../Service/Service';

function Home() {
    return (
        <>
            <Navs />
            <Banners />
            <Abouts/>
            <Services/>
        </>
    );
}

export default Home;
