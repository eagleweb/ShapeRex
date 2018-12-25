import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import s from './home.module.css'

const items = [
    {
        src: '/client/src/assets/img/slider/1.png',
    },
    {
        src: '/client/src/assets/img/slider/2.png',
    },
    {
        src: '/client/src/assets/img/slider/3.png',
    }
];

const Home = () => (
    <div className={s.carousel}>
        <UncontrolledCarousel items={items} />
    </div>
);

export default Home;