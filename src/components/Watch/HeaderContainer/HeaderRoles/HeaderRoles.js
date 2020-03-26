import React from 'react';
import { Link } from 'react-router-dom';

function HeaderRoles(props) {
  const roles = props.roles;

  return (
    <div className='season-block-header-roles'>
      <h2>В ролях:</h2>
      <p>
        {roles.map((actor) => {
          return (
            <Link to={`/actors/all/${actor.id}`} key={'role ' + actor.id}>
              <span>{`${actor.name} `}</span>
            </Link>
          );
        })}
      </p>
    </div>
  );
}

export default HeaderRoles;
