import React from 'react';
import { Link } from 'react-router-dom';
import { Popover } from 'antd';
import SmallActorDescription from './SmallActorDescription/SmallActorDescription.js';

function HeaderRoles(props) {
  const roles = props.roles;
  return (
    <div className='season-block-header-roles'>
      <h2>В ролях:</h2>
      <p>
        {roles.map((actor) => {
          return (
            <Link to={`/actors/all/${actor.id}`} key={'role ' + actor.id}>
              <Popover
                content={<SmallActorDescription role={actor.role} image={actor.img} />}
                trigger='hover'
              >
                <span>{`${actor.name} `}</span>
              </Popover>
            </Link>
          );
        })}
      </p>
    </div>
  );
}

export default HeaderRoles;
