import { Layout, Menu } from 'antd';
import React from 'react';
import style from '../styles/layouts/navbar.module.scss'
const { Header } = Layout;

const menuList = [
  { name:'首页',key:'1', },
  { name:'其他',key:'2', }
]

const Navbar: React.FC = () => (
  <Layout className={style.layout}>
    <Header className={style['layouts-header']}>
      <img className={style.logo}  src='https://www.nextjs.cn/static/images/nextjs-logo.png' alt=''></img>
      <Menu
        className={style['layouts-menu']}
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={menuList.map((item, index) => {
          return {
            key:item.key,
            label: item.name,
          };
        })}
      />
    </Header>
  </Layout>
);

export default Navbar;