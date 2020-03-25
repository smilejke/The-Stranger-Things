import React from 'react';
import { HeaderText } from '../../../../global/utils/global.js';

function CharacterInfo(props) {
  const text = props.text;
  const { characterInfoHeader } = HeaderText;
  return (
    <div className='short-desrc'>
      <h3>{characterInfoHeader} </h3>
      <div className='actor-profile-text-decorator'>
        <p>{text}</p>
      </div>
    </div>
  );
}
export default CharacterInfo;
