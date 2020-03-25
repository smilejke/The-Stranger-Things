import React from 'react';

function HeaderRoles(props) {
  const roles = props.roles;
  return (
    <div className='season-block-header-roles'>
      <h2>В ролях:</h2>
      <p>{roles}</p>
    </div>
  );
}

export default HeaderRoles;
