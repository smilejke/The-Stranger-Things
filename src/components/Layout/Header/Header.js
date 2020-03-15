import React from 'react';
import { Layout, Menu } from 'antd';
import '../../../index.css';
import { Link } from 'react-router-dom';

const { Header } = Layout;

function ActorsPageHeader(props) {
  const {
    getActors,
    routes: { home, actors, news },
  } = props.data;

  const linkOptionsToCreate = [
    { adressToCreateLink: home, spanToShow: 'Home', onClick: null },
    {
      adressToCreateLink: actors,
      spanToShow: 'Actors',
      onClick: () => getActors(),
    },
    { adressToCreateLink: news, spanToShow: 'Watch', onClick: null },
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
      </Menu>
    </Header>
  );
}

export default ActorsPageHeader;
