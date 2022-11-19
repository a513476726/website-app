import Navbar from './navbar'
import Footer from './footer'
import React from 'react';
import style from '../styles/layouts/navbar.module.scss'

export default function MyLayout({ children }:any) {
  return (
    <>
      <Navbar />
        <div className={style['site-layout-content']}>
          <main>{children}</main>
        </div>
      <Footer />
    </>
  )
}