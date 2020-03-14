import React from 'react';

function CharacterInfo(props) {
  const text = props.text;
  return (
    <div className='short-desrc'>
      <h3>О сыгранном персонаже: </h3>
      <div className='actor-profile-text-decorator'>
        <p>{text}</p>
      </div>
    </div>
  );
}
export default CharacterInfo;
