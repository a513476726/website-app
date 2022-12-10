import Navbar from './navbar'
import Footer from './footer'
import React from 'react';
import style from '@/styles/layouts/navbar.module.scss'

export default function MyLayout({ children }:any) {
  const items = [
    { label: '首页', key: '/' }, // 菜单项务必填写 key
    { label: '手机自适应', key: '/mobile' },
    { label: 'AntDesign', key: '/ant-design' },
  ];
  return (
    <>
      <Navbar items={items}/>
        <div className={style['site-layout-content']}>
          <main>{children}</main>
        </div>
      <Footer />
    </>
  )
}