import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import s from './Layout.module.css'

const Layout = (props) => (
    <div className={s.container}>
        <Header />
        <main>
              {props.children}
        </main>
        <Footer />
    </div>
);

export default Layout