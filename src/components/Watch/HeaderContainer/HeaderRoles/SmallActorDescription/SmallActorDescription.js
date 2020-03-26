import React from 'react';

function SmallActorDescription(props) {
  const role = props.role;
  console.log(props.image.src);

  return (
    <div>
      <div className='card-img'>
        <img src={props.image.src} alt={props.image.alt} />
      </div>
      <div className='card-role'>
        <span>{role}</span>
      </div>
    </div>
  );
}

export default SmallActorDescription;
