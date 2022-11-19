import { Layout, Menu,Image } from 'antd';
import React, { useState,useEffect }from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import style from '../styles/layouts/navbar.module.scss'
const { Header } = Layout;

const Navbar: React.FC = () => {
  const router = useRouter();
  const toPage = (e:any)=>{
    router.push(e.key)
  }
  const items = [
    { label: '首页', key: '/' }, // 菜单项务必填写 key
    { label: '登录页', key: '/login' },
    { label: '其他', key: '/other' },
  ];
  return (
    <Layout className={style.layout}>
      <Header className={style['layouts-header']}>
        <Image className={style.logo} src='https://www.nextjs.cn/static/images/nextjs-logo.png' alt=''></Image>
        <Menu
          style={{width:'300px'}}
          className={style['layouts-menu']}
          mode="horizontal"
          selectedKeys={ [router.route] }
          items={items}
          onClick={ toPage }
        />
      </Header>
    </Layout>
  );
};

export default Navbar;
