import React from 'react';
import '../../../index.css';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { navOptions } from '../../../global/utils/global.js';

const { SubMenu } = Menu;
const { Header } = Layout;

function ActorsPageHeader() {
  const {
    routes: {
      home,
      actors,
      watch: { seasonOne, seasonTwo, seasonThree },
    },
  } = navOptions;

  const linkOptionsToCreate = [
    { adress: home, text: 'Главная' },
    { adress: actors, text: 'Актеры сериала' },
  ];
  const submenu = [
    { adress: seasonOne, text: 'Первый сезон', id: 'SEASON_ONE' },
    { adress: seasonTwo, text: 'Второй сезон', id: 'SEASON_TWO' },
    { adress: seasonThree, text: 'Третий сезон', id: 'SEASON_THREE' },
  ];

  return (
    <Header className='page-nav-header'>
      <div className='logo'>
        <Link to={home}>
          <img
            src='https://ochen-strannye-dela.online/images/logo-stranger-things.png'
            alt='logo'
          ></img>
        </Link>
      </div>
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
