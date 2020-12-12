import React from 'react';

import AboutUs from './AboutUs';
import {BookingBox} from './BookingBox';
import PromoSection from './PromoSection';
import ServiceAd from './ServiceAd';
import ServiceSection from './ServiceSection';
import {TestimonialSection} from './TestimonialSection';


const Home = () => {
    return (
        <React.Fragment>
            <AboutUs />
            <BookingBox />
            <ServiceAd />
            <PromoSection />
            <ServiceSection />
            <TestimonialSection />
        </React.Fragment>
    )
}

export default Home;
