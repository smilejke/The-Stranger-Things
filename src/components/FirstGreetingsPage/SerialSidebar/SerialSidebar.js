import React from 'react';
import { seasonIds } from '../../../global/utils/global.js';
import { Link } from 'react-router-dom';

function SerialSidebar() {
  return (
    <div className='serial-sidebar'>
      <ul>
        <h2>Выбор сезона</h2>
        {seasonIds.map((elem) => {
          return (
            <Link to={`/watch/${elem.id}`} key={'sideLink' + seasonIds.indexOf(elem)}>
              <li>{elem.text}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default SerialSidebar;
