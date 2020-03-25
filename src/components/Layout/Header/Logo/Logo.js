import React from 'react';
import { Link } from 'react-router-dom';

function Logo(props) {
  const home = props.adress;
  return (
    <div className='logo'>
      <Link to={home}>
        <img
          src='https://ochen-strannye-dela.online/images/logo-stranger-things.png'
          alt='logo'
        ></img>
      </Link>
    </div>
  );
}

export default Logo;
