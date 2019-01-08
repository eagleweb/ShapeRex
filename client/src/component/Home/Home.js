import React, { Fragment } from 'react';
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
    <Fragment>
        <div className={s.carousel}>
            <UncontrolledCarousel items={items} />
        </div>
        <div className={s.text}>
            <h2>Welcome</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus lacus facilisis sem auctor, et condimentum lacus fringilla. Proin pulvinar mattis sem a vestibulum. Praesent semper eget erat consequat convallis. Phasellus posuere ultricies tristique. Donec volutpat turpis vel velit ultrices, eget ullamcorper tellus pharetra.</p>
        </div>
    </Fragment>
);

UncontrolledCarousel.propTypes = {
    items: PropTypes.array.isRequired,
    indicators: PropTypes.bool,
    controls: PropTypes.bool,
    autoPlay: PropTypes.bool,
};

export default Home;