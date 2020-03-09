import React from 'react';
import '../../../index.css';

function Profile(props) {
  // const {
  //   img: { src, alt },
  //   name,
  //   born,
  //   age,
  //   from,
  //   role,
  //   gender,
  //   majority,
  //   id,
  // } = props;

  return (
    <div className='profile-container'>
      <h3>Hello {props.actor.id}!</h3>
    </div>
  );
}
export default Profile;
