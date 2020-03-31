import React from 'react';
import Hero from '../component/hero';
import Banner from '../component/banner';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <Hero>
            <Banner title="404" subtitle="PAge not found">
                <Link to="/" className="btn-primary">Return to home</Link>
            </Banner>
        </Hero>
    )
}
