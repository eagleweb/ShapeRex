import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import s from './layout.module.css'

const Layout = (props) => (
    <div className={s.layout_container}>
        <Header />
        <main className={s.content}>
              {props.children}
        </main>
        <Footer />
    </div>
);

export default Layout