import React from 'react';
import Banner from '../Banner/Banner';
import Photos from '../Photos/Photos';

import Services from '../Services/Services';
import VipServices from '../vipServices/VipServices';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Photos></Photos>
            <VipServices></VipServices>
        </div>
    );
};

export default Home;