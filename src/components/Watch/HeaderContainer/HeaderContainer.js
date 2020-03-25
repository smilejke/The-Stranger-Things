import React from 'react';
import HeaderTitle from './HeaderTitle/HeaderTitle.js';
import RateSeason from './Rate/Rate.js';
import HeaderRoles from './HeaderRoles/HeaderRoles.js';

function WatchHeader(props) {
  const {
    img: { src, alt },
    headerTitle: { header, date, roles },
  } = props.header;

  return (
    <div className='watch-header'>
      <div className='watch-header-picture'>
        <img src={src} alt={alt}></img>
      </div>

      <div className='watch-header-content'>
        <HeaderTitle header={header} date={date} />
        <RateSeason />
        <HeaderRoles roles={roles} />
      </div>
    </div>
  );
}

export default WatchHeader;
