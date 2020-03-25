import React from 'react';
import '../../../index.css';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { navOptions, linkOptionsToCreate, submenu } from '../../../global/utils/global.js';
import Logo from './Logo/Logo.js';

const { SubMenu } = Menu;
const { Header } = Layout;

function ActorsPageHeader() {
  const {
    routes: { home },
  } = navOptions;

  return (
    <Header className='page-nav-header'>
      <Logo adress={home} />
      <Menu className='page-nav-menu' theme='dark' mode='horizontal'>
        {linkOptionsToCreate.map((item) => {
          return (
            <Menu.Item key={'menuItem' + linkOptionsToCreate.indexOf(item)}>
              <Link to={item.adress}>
                <span>{item.text}</span>
              </Link>
            </Menu.Item>
          );
        })}

        <SubMenu key='sub1' title={<span>Обзор эпизодов</span>}>
          {submenu.map((el) => {
            return (
              <Menu.Item key={'submenuItem' + submenu.indexOf(el)} id={el.id}>
                <Link to={el.adress}>
                  <span>{el.text}</span>
                </Link>
              </Menu.Item>
            );
          })}
        </SubMenu>
      </Menu>
    </Header>
  );
}

export default ActorsPageHeader;
