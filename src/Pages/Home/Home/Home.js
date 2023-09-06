import React from 'react';
import Banner from '../Banner/Banner';
import Explore from '../Explore/Explore';
import Choose from '../Choose/Choose';
import Interior from '../Choose/Interior';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Explore/>
            <Choose/>
            <Interior/>
        </div>
    );
};

export default Home;