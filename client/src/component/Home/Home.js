import React from 'react';
import PropTypes from 'prop-types'
import { UncontrolledCarousel } from 'reactstrap';
import s from './home.module.css'

const items = [
    {
        src: '/client/src/assets/img/slider/1.png',
        caption: ''
    },
    {
        src: '/client/src/assets/img/slider/2.png',
        caption: ''
    },
    {
        src: '/client/src/assets/img/slider/3.png',
        caption: ''
    }
];

const Home = () => (
    <div className={s.carousel}>
        <UncontrolledCarousel items={items} />
    </div>
);

UncontrolledCarousel.propTypes = {
    items: PropTypes.array.isRequired,
    indicators: PropTypes.bool,
    controls: PropTypes.bool,
    autoPlay: PropTypes.bool,
};

export default Home;