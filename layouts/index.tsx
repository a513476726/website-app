import Navbar from './navbar'
import Footer from './footer'

import { Breadcrumb, Layout } from 'antd';
import React from 'react';
import style from '../styles/layouts/navbar.module.scss'
const { Content } = Layout;

export default function MyLayout({ children }:any) {
  return (
    <>
      <Navbar />
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className={style['site-layout-content']}>
            content
            <main>{children}</main>
          </div>
        </Content>
      <Footer />
    </>
  )
}