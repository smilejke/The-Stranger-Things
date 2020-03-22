import React from 'react';
import { seasonIds } from '../../../global/global.js';
import { Link } from 'react-router-dom';

function SerialSidebar() {
  return (
    <div className='serial-sidebar'>
      <ul>
        <span>Выбор сезона</span>
        <Link to={`/watch/${seasonIds[0]}`}>
          <li>Season One</li>
        </Link>
        <Link to={`/watch/${seasonIds[1]}`}>
          <li>Season Two</li>
        </Link>
        <Link to={`/watch/${seasonIds[2]}`}>
          <li>Season Three</li>
        </Link>
      </ul>
    </div>
  );
}

export default SerialSidebar;
