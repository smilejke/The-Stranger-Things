import React from 'react';
import { Layout, Menu } from 'antd';
import '../../../index.css';
import { Link } from 'react-router-dom';
import { getSeasonId } from '../../../store/Watch/actions.js';
import { connect, useDispatch } from 'react-redux';

const { SubMenu } = Menu;
const { Header } = Layout;

function ActorsPageHeader(props) {
  const dispatch = useDispatch();

  const {
    getActors,
    routes: {
      home,
      actors,
      watch: { seasonOne, seasonTwo, seasonThree },
    },
  } = props.data;

  const linkOptionsToCreate = [
    { adress: home, text: 'Home', onClick: null },
    { adress: actors, text: 'Actors', onClick: getActors },
  ];
  const submenu = [
    { adress: seasonOne, text: 'Season One', id: 'SEASON_ONE' },
    { adress: seasonTwo, text: 'Season Two', id: 'SEASON_TWO' },
    { adress: seasonThree, text: 'Season Three', id: 'SEASON_THREE' },
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
      <Menu className='page-nav-menu' theme='dark' mode='horizontal'>
        {linkOptionsToCreate.map((item) => {
          return (
            <Menu.Item key={'menuItem' + linkOptionsToCreate.indexOf(item)} onClick={item.onClick}>
              <Link to={item.adress}>
                <span>{item.text}</span>
              </Link>
            </Menu.Item>
          );
        })}

        <SubMenu key='sub1' title={<span>Watch</span>}>
          {submenu.map((el) => {
            return (
              <Menu.Item
                key={'submenuItem' + submenu.indexOf(el)}
                onClick={() => dispatch(getSeasonId(el.id))}
                id={el.id}
              >
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
const mapStateToProps = (state) => {
  return {
    currentSeasonId: state.getSerialEpisodesData.currentSeasonId,
  };
};

export default connect(mapStateToProps)(ActorsPageHeader);
