import React from 'react';
import Hero from '../component/hero';
import Banner from '../component/banner';
import { Link } from 'react-router-dom';
import Services from '../component/services';
import Featuredroom from '../component/featuredroom';

export default function Home() {
    return (
        <>
        <Hero>
        <Banner title='BEACH RESORT' subtitle='Affordable rooms at reasonable price'>
            <Link to="/room" className="btn-primary">Rooms</Link>
        </Banner>
         </Hero>
         <Services/>
         <Featuredroom/>
         </>
    )
}

