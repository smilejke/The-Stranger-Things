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

  const linkOptionsToCreate = [
    { adressToCreateLink: home, iconType: 'pie-chart', spanToShow: 'Home', onClick: null },
    {
      adressToCreateLink: actors,
      iconType: 'star',
      spanToShow: 'Actors',
      onClick: () => getActorsData(),
    },
    { adressToCreateLink: news, iconType: 'file', spanToShow: 'News', onClick: null },
  ];

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
        {linkOptionsToCreate.map((item) => {
          return (
            <Menu.Item key={'menuItem' + linkOptionsToCreate.indexOf(item)} onClick={item.onClick}>
              <Link to={item.adressToCreateLink}>
                <Icon type={item.iconType} />
                <span>{item.spanToShow}</span>
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
}

export default Sidebar;
