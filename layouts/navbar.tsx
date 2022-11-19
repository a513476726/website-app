import { Layout, Menu,Image } from 'antd';
import {
  BuildOutlined
} from '@ant-design/icons';
import React, { useState,useEffect }from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import style from '../styles/layouts/navbar.module.scss'
const { Header } = Layout;

type NavarModel = {
  items:Array<any>
}

const Navbar: React.FC<NavarModel> = ( props ) => {
  const router = useRouter();
  const toPage = (e:any)=>{
    router.push(e.key)
  }
  return (
    <Layout className={style.layout}>
      <Header className={style['layouts-header']}>
        <BuildOutlined className={style.logo} />
        {/* <Image  src='https://www.nextjs.cn/static/images/nextjs-logo.png' alt=''></Image> */}
        <Menu
          className={style['layouts-menu']}
          mode="horizontal"
          selectedKeys={ [router.route] }
          items={props.items}
          onClick={ toPage }
        />
      </Header>
    </Layout>
  );
};

export default Navbar;
