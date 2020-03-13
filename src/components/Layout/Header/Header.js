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
    <Header>
      <div className='logo' />
      <Menu
        theme='dark'
        mode='horizontal'
        // defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
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
