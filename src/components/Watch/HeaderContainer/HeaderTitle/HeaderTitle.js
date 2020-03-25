import React from 'react';

function HeaderTitle(props) {
  return (
    <div className='header-season'>
      <h2>{props.header}</h2>
      <p>{props.date}</p>
    </div>
  );
}

export default HeaderTitle;
