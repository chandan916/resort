import React from 'react';
import Hero from '../component/hero';
import Banner from '../component/banner';
import { Link } from 'react-router-dom';
import Roomcontainer from '../component/roomcontainer';

export default function Room() {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title='BEACH RESORT' subtitle='All rooms available'>
            <Link to="/" className="btn-primary">Home</Link>
        </Banner>
        </Hero>
        <Roomcontainer/>
        </>
    )
}

