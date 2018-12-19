import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import s from './home.module.css'

const items = [
    {
        src: '/client/src/assets/img/slider/1.png',
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: '/client/src/assets/img/slider/2.png',
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: '/client/src/assets/img/slider/3.png',
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

const Home = () => (
    <div className={s.carousel}>
        Home
    </div>
);

export default Home;