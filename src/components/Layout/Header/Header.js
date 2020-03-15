import React from 'react';
import { Layout, Menu } from 'antd';
import '../../../index.css';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
const { Header } = Layout;

function ActorsPageHeader(props) {
  const {
    getActors,
    routes: {
      home,
      actors,
      watch: { seasonOne, seasonTwo, seasonThree },
    },
  } = props.data;

  const linkOptionsToCreate = [
    { adressToCreateLink: home, spanToShow: 'Home', onClick: null },
    {
      adressToCreateLink: actors,
      spanToShow: 'Actors',
      onClick: () => getActors(),
    },
  ];
  const submenu = [
    { adressToCreateLink: seasonOne, spanToShow: 'Season One', onClick: null },
    { adressToCreateLink: seasonTwo, spanToShow: 'Season Two', onClick: null },
    { adressToCreateLink: seasonThree, spanToShow: 'Season Three', onClick: null },
  ];

  return (
    <Header className='page-nav-header'>
      <div className='logo'>
        <Link to={`/`}>
          <img
            src='https://ochen-strannye-dela.online/images/logo-stranger-things.png'
            alt='logo'
          ></img>
        </Link>
      </div>
      <Menu
        className='page-nav-menu'
        theme='dark'
        mode='horizontal'
        // defaultSelectedKeys={['2']}
      >
        {linkOptionsToCreate.map((item) => {
          return (
            <Menu.Item key={'menuItem' + linkOptionsToCreate.indexOf(item)} onClick={item.onClick}>
              <Link to={item.adressToCreateLink}>
                <span>{item.spanToShow}</span>
              </Link>
            </Menu.Item>
          );
        })}

        <SubMenu key='sub1' title={<span>Watch</span>}>
          {submenu.map((el) => {
            return (
              <Menu.Item key={'submenuItem' + submenu.indexOf(el)}>
                <Link to={el.adressToCreateLink}>
                  <span>{el.spanToShow}</span>
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
