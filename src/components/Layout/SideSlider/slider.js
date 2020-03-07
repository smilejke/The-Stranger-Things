import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

function Sidebar(props) {
  const {
    collapsedStatus,
    hoverSideBar,
    getActorsData,
    routes: { home, actors, news },
  } = props.sidebarOptions;

  return (
    <Sider
      collapsible
      collapsed={collapsedStatus}
      onCollapse={() => {
        hoverSideBar(!collapsedStatus);
      }}
    >
      <div className='logo' />
      <Menu theme='dark' mode='inline'>
        <Menu.Item key='layoutMenuItem1'>
          <Link to={home}>
            <Icon type='pie-chart' />
            <span>Home</span>
          </Link>
        </Menu.Item>

        <Menu.Item
          key='layoutMenuItem2'
          onClick={() => {
            getActorsData();
          }}
        >
          <Link to={actors}>
            <Icon type='star' />
            <span>Actors</span>
          </Link>
        </Menu.Item>

        <Menu.Item key='layoutMenuItem3'>
          <Link to={news}>
            <Icon type='file' />
            <span>News</span>{' '}
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Sidebar;
